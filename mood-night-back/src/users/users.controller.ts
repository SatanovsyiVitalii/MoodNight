import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Session,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize-interceptor';
import { AuthService } from './auth/auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInUserDto } from './dtos/signin-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Get logged in user' })
  @ApiResponse({
    status: 200,
    description: 'Logged in user',
    type: User,
  })
  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: User): User {
    return user;
  }

  @ApiOperation({ summary: 'Get all users by email' })
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'an email for searching users',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'The found users',
    type: [User],
  })
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @ApiOperation({ summary: 'Sign out' })
  @ApiResponse({
    status: 200,
    description: 'Deletes cookies',
    type: undefined,
  })
  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @ApiOperation({ summary: 'Create a user' })
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Created user',
    type: User,
  })
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body);
    session.userId = user.id;
    return user;
  }

  @ApiOperation({ summary: 'Sign In' })
  @ApiBody({
    type: SignInUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Signed in user',
    type: User,
  })
  @Post('/signin')
  async signin(@Body() body: SignInUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiQuery({
    name: 'id',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted user',
    type: User,
  })
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
