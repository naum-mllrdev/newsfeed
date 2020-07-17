import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../core/interfaces/IArticle';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['../w3.css']
})
export class ArticleComponent implements OnInit {
  article: IArticle;
  showComments: boolean;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showComments = false;
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getFeed(id)
      .subscribe((feed: IArticle) => this.article = feed);
  }

  toggleComments(): void {
    this.showComments = !this.showComments;
  }
}
