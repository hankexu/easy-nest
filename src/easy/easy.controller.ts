import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';

@Controller('easy')
export class EasyController {
  @Get(':resource/list')
  async list(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }

  @Get(':resource/detail/:id')
  async detail(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }

  @Post(':resource/add')
  async create(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }

  @Post(':resource/edit/:id')
  async edit(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }

  @Delete(':resource/del/:id')
  async delete(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }

  @Get(':resource/kv')
  async kvList(@Param() params, @Req() req) {
    return `${req.path}: ${JSON.stringify(params)}`;
  }
}
