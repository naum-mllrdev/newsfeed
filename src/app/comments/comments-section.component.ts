import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../core/interfaces/IComment';
import { IArticle } from '../core/interfaces/IArticle';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments.component.css', '../w3.css']
})
export class CommentsSectionComponent implements OnInit {
  @Input() article: IArticle;
  commentsList: IComment[];
  newCommentObj: IComment;
  comment: FormControl;
  showCommentText: string;
  showComments: boolean;
  showError: boolean;

  constructor() {}

  ngOnInit() {
    this.setCommentControls();
    this.setCommentsList();
  }

  setCommentControls(): void {
    this.comment = new FormControl('', [Validators.maxLength(10)]);
  }

  setCommentsList(): void {
    this.commentsList = this.article.comments;
  }

  addComment(): void {
    if (this.comment.valid) {
      this.showError = false;
      this.newCommentObj = {
        id: 1234,
        user: {
          id: 12341,
          name: 'Maximo',
          location: 'Mexico',
        },
        date: '15 July 2020',
        comment: this.comment.value,
      };
      this.commentsList.push(this.newCommentObj);
      this.comment.setValue('');
    }
  }
}
