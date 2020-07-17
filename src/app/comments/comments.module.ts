import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CommentsComponent],
  exports: [CommentsComponent],
})
export class CommentsModule {}
