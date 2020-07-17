import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommentsListComponent } from './comments-list.component';
import { CommentsSectionComponent } from './comments-section.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CommentsSectionComponent,
    CommentsListComponent
  ],
  exports: [
    CommentsSectionComponent,
    CommentsListComponent
  ],
})
export class CommentsModule {}
