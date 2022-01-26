import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  insertUser(@Body() body): string {
    console.log(body);
    return 'insert user test';
  }

  @Get('user/:id')
  getHello(@Req() req: Request, @Body() body, @Param() param): string {
    console.log(param);
    return this.appService.getHello();
  }
}
