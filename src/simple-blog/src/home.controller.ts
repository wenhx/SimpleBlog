import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('index')
  index() {
    return { title: 'Hello Nestjs', message: this.homeService.getHello() };
  }
}