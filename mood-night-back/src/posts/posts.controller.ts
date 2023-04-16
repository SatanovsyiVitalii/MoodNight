import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize-interceptor';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostDto } from './dtos/post.dto';
import { PostsService } from './posts.service';
import { User } from '../users/user.entity';
import { Post as PostEntity } from './post.entity';
@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'Returns all posts',
    type: [PostEntity],
  })
  @Get()
  findAllPosts() {
    return this.postsService.find();
  }

  @ApiOperation({ summary: 'Get a post' })
  @ApiQuery({
    name: 'id',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Get a post',
    type: PostEntity,
  })
  @Get('/:id')
  findPost(@Param('id') id: string) {
    return this.postsService.findOne(parseInt(id));
  }

  @ApiOperation({ summary: 'Creates a new post' })
  @ApiBody({
    type: CreatePostDto,
  })
  @ApiResponse({
    status: 200,
    description: 'An user creates a new post',
    type: PostEntity,
  })
  @Post()
  createPost(@Body() body: CreatePostDto, @CurrentUser() user: User) {
    return this.postsService.create(body, user);
  }

  @ApiOperation({ summary: 'Delete a post' })
  @ApiQuery({
    name: 'id',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted post',
    type: PostEntity,
  })
  @Delete('/:id')
  removePost(@Param('id') id: string) {
    return this.postsService.remove(parseInt(id));
  }
}
