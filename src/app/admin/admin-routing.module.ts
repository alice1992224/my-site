import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../auth-guard.service';
import { AuthService }          from '../auth.service';

import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children:[
          { path: 'articles', component: ArticleComponent },
          { path: 'categories', component: CategoryComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]

})
export class AdminRoutingModule { }