import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/feeds' },
  { path: '**', pathMatch: 'full', redirectTo: '/feeds' },
  { path: 'feeds', loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
