import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MarkdownModule } from 'angular2-markdown';

/*
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
import { SiteContentComponent } from './site-content/site-content.component';
import { CategoryService } from './category.service';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
*/
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    //SiteHeaderComponent,
    //SiteLeftbarComponent,
    //SiteContentComponent,
    //ArticleComponent,
    //CategoryComponent,
    AdminComponent,
    CategoryComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminRoutingModule,
    //MarkdownModule.forRoot(),
  ],
  providers: [
    //CategoryService,
    //ArticleService
  ],
})
export class AdminModule { }
