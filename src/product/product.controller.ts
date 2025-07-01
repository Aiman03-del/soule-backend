import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 🔐 নতুন প্রোডাক্ট তৈরি করার রুট, প্রোটেক্টেড
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  // 🟢 সকলের জন্য উন্মুক্ত — সব প্রোডাক্ট দেখার রুট
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  // 🟢 সকলের জন্য উন্মুক্ত — এক প্রোডাক্টের ডিটেইলস দেখার রুট
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // 🔐 প্রোডাক্ট আপডেট করার রুট, প্রোটেক্টেড
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(+id, dto);
  }

  // 🔐 প্রোডাক্ট ডিলিট করার রুট, প্রোটেক্টেড
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
