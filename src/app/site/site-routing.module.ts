import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { SiteComponent } from './site.component';

const siteRoutes: Routes = [
  { 
    path: '',
    component: SiteComponent,
    children: [
      {
        path: 'articles/:id',
        component: ArticleComponent
      },
      {
        path: 'categories/:id',
        component: CategoryComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(siteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteRoutingModule { }