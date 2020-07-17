import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsPageComponent } from './feeds-page.component';

const routes: Routes = [
  { path: '', component: FeedsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule { }
