import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SiteContentComponent } from './site-content/site-content.component';
import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: CategoryComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'categories/:id', component: CategoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}