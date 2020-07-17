import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';
import { ArticlesRoutingModule } from './article-routing.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CommentsModule
  ],
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
