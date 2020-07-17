import {Component, OnInit} from '@angular/core';
import { IArticle } from '../shared/interfaces';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['../w3.css']
})
export class ArticleComponent implements OnInit {
  showComments: boolean;
  showCommentText: string;
  article: IArticle;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showComments = false;
    this.showCommentText = this.showComments ? 'Hide Comments' : 'Show Comments';

    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getFeed(id)
      .subscribe((feed: IArticle) => this.article = feed);
  }

  toggleComments() {
    this.showComments = !this.showComments;
    this.showCommentText = this.showComments ? 'Hide Comments' : 'Show Comments';
  }
}
