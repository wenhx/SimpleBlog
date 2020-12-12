import { Request, Response } from 'express';
import { WebPage } from '../webPage';

export default function webPageObjectMiddleware(req: Request, res: Response, next: Function) {
    const _render = res.render;
    const webPage = new WebPage('Simple Blog!');
    res.locals.webPage = webPage;
    
    // res.render = function(view: string, options?: object, 
    //     callback?: (err: Error, html: string) => void): void {
    //         if (options !== undefined && Common.WEBPAGE_TITLE_KEY in options)
    //         {
    //             let title = _this.getTitle(options[Common.WEBPAGE_TITLE_KEY]);
    //             options[Common.WEBPAGE_TITLE_KEY] = title;
    //         }
    //         else
    //         {
    //             options = {};
    //             options[Common.WEBPAGE_TITLE_KEY] = _this.configService.get<string>('DEFAULT_WEBPAGE_TITLE');
    //         }
    //         _render.call(this, view, options, callback);
    // }

    next();
}

// function getTitle(title: string): string {
//     const titleTemplate = '{title} - Simple Blog!';
//     const fullTitle = titleTemplate.replace('{title}', title);
//     return fullTitle;
// }