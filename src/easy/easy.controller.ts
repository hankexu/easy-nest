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
import { EasyService } from './easy.service';
import { QueryDto } from './dto/query.dto';

@Controller('easy')
export class EasyController {
  constructor(@Inject(EasyService) private readonly easyService: EasyService,
  ) {
  }

  @Get(':resource/list')
  async list(@Param('resource') resource: string, @Query() query: QueryDto) {
    return this.easyService.list(resource, query);
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
