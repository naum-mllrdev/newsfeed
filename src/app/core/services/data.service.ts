import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { IArticle } from '../interfaces/IArticle';

@Injectable()
export class DataService {

  constructor(private service: ApiService) {}

  getFeeds(): Observable<IArticle[]> {
    return this.service.get<IArticle[]>('/feeds');
  }

  getFeed(id: number): Observable<IArticle> {
    return this.service.get<IArticle[]>('/feeds')
      .pipe(
        map(feeds => {
          const feed = feeds.filter((article: IArticle) => article.id === id);
          return (feed && feed.length) ? feed[0] : null;
        })
      );
  }
}
