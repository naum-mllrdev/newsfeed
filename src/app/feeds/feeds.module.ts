import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsComponent } from './feeds.component';
import { FeedsRoutingModule } from './feeds-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeedsRoutingModule
  ],
  declarations: [
    FeedsComponent
  ],
  exports: [
    FeedsComponent
  ]
})
export class FeedsModule { }
