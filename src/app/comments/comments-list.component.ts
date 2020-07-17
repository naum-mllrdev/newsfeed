import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IComment } from '../core/interfaces/IComment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() commentsList: IComment[];

  constructor() {}

  ngOnInit() {
  }

  deleteComment(index: number): void {
    if (index > -1) {
      this.commentsList.splice(index, 1);
    }
  }
}
