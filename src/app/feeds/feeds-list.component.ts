import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IArticle } from '../core/interfaces/IArticle';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['../w3.css']
})
export class FeedsListComponent implements OnInit {
  feedsList: IArticle[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.dataService
      .getFeeds()
      .subscribe((feeds: IArticle[]) => (this.feedsList = feeds));
  }
}
