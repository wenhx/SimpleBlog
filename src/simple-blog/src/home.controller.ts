import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Controller()
export class HomeController {
    constructor(private readonly homeService: HomeService,
        private readonly configService: ConfigService) { }

    @Get()
    @Render('index')
    index() {
        return { title: this.getTitle('Welcome!'), message: this.homeService.getHello() };
    }

    getTitle(title: string): string {
        const titleTemplate = this.configService.get<string>('WEBPAGES_TITLE', '');
        const fullTitle = titleTemplate.replace('{title}', title);
        return fullTitle;
    }
}