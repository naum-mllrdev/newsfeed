import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiService } from './api.service';
import { IArticle } from '../shared/interfaces';

@Injectable()
export class DataService {
  service: ApiService;
  
  getFeeds(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.baseUrl + 'feeds')// + 'feeds.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getFeed(id: number): Observable<IArticle> {
    return this.http.get<IArticle[]>(this.baseUrl + 'feeds')// + 'feeds.json')
      .pipe(
        map(feeds => {
          const feed = feeds.filter((article: IArticle) => article.id === id);
          return (feed && feed.length) ? feed[0] : null;
        }),
        catchError(this.handleError)
      );
  }
}
