import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './user.entity';

import { UsersService } from './users.service';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users by email' })
  @ApiResponse({
    status: 200,
    description: 'The found users',
    type: [User],
  })
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }
}
