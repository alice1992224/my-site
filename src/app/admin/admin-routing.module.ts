import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ArticleComponent } from './article/article.component';
//import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    /*
    children: [
      {
        path: 'articles',
        component: ArticleComponent
      },
      {
        path: 'categories',
        component: CategoryComponent
      }
    ]
    */
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }