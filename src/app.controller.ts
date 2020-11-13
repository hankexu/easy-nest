import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

/**
 * jlfjd gdsjl
 */
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getHello(@Req() data): string {
    console.log(data);
    return this.appService.getHello();
  }

  /**
   * hello
   * @param body
   * @constructor
   */
  @Post()
  Hello(@Body() body: HelloDto): string {
    return 'hello, ' + body.name;
  }
}
