import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IArticle } from '../shared/interfaces';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['../w3.css'],
})
export class FeedsComponent implements OnInit {
  articles: IArticle[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.dataService
      .getFeeds()
      .subscribe((feeds: IArticle[]) => (this.articles = feeds));
  }

  readMore() {
    alert('readMe');
  }
}
