import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/paganation-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.coffeeService.findAll(paginationQueryDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.coffeeService.findOne(id);
  }
  @Post()
  async create(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return await this.coffeeService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.coffeeService.remove(id);
  }
}
