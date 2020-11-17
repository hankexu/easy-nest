import {
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ConfigService } from '../shared/config.service';

@Controller('easy')
export class EasyController {
  @Get(':resource/list')
  async list(@Param('resource') resource: string, @Query() query) {
    return { resource, ...query };
  }

  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    console.log(this.configService.config());
  }

  @Get(':resource/detail/:id')
  async detail(@Param() params, @Req() req) {
    return;
    `$ { req . path } : $ {JSON.stringify(params)}`;
  }

  @Post(':resource/add')
  async create(@Param() params, @Req() req) {
    return;
    `$ { req . path } : $ {JSON.stringify(params)} `;
  }

  @Post(':resource/edit/:id')
  async edit(@Param() params, @Req() req) {
    return;
    ` $ {req.path}: $ { JSON . stringify(params) } `;
  }

  @Delete(':resource/del/:id')
  async delete(@Param() params, @Req() req) {
    return ` $ {req.path} : $ {JSON.stringify(params)} `;
  }

  @Get(':resource/kv')
  async kvList(@Param() params, @Req() req) {
    return ` $ {req.path} : $ {JSON.stringify(params)} `;
  }
}
