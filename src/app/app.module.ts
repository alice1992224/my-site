import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
import { SiteContentComponent } from './site-content/site-content.component';
import { CategoryService } from './category.service';
import { ArticleService } from './article.service';
import { SiteComponent } from './site/site.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteLeftbarComponent,
    SiteContentComponent,
    SiteComponent,
    ArticleComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    CategoryService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
