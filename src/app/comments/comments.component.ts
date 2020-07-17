import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../shared/interfaces';
import { IComment } from '../shared/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() article: IArticle;
  comments: IComment[];
  tempCmnt: IComment;

  newComment: string;

  constructor() {}

  ngOnInit() {
    this.comments = this.article.comments;
  }

  addComment(value: string) {
    this.tempCmnt = {
      id: 1234,
      user: {
        id: 12341,
        name: 'Maximo',
        location: 'Mexico',
      },
      date: '15 July 2020',
      comment: value,
    };
    this.article.comments.push(this.tempCmnt);
    this.newComment = '';
  }

  deleteComment(index: number) {
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }
}
