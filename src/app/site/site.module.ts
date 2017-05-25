import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';


import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
import { SiteContentComponent } from './site-content/site-content.component';
import { CategoryService } from './category.service';
import { ArticleService } from './article.service';
import { SiteRoutingModule } from './site-routing.module';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { SiteComponent } from './site.component';


@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteLeftbarComponent,
    SiteContentComponent,
    ArticleComponent,
    CategoryComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SiteRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    CategoryService,
    ArticleService
  ],
})
export class SiteModule { }
