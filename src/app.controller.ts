import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';

/**
 * jlfjd gdsjl
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
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
