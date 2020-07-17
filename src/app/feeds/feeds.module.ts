import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsPageComponent } from './feeds-page.component';
import { FeedsListComponent } from './feeds-list.component';
import { FeedsRoutingModule } from './feeds-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeedsRoutingModule
  ],
  declarations: [
    FeedsPageComponent,
    FeedsListComponent
  ],
  exports: [
    FeedsPageComponent,
    FeedsListComponent
  ]
})
export class FeedsModule { }
