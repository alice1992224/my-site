import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { SiteHeaderComponent } from './site-header/site-header.component';
//import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
//import { SiteContentComponent } from './site-content/site-content.component';
//import { CategoryService } from './category.service';
//import { ArticleService } from './article.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
//import { ArticleComponent } from './article/article.component';
//import { CategoryComponent } from './category/category.component';

import { SiteModule } from './site/site.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //SiteHeaderComponent,
    //SiteLeftbarComponent,
    //SiteContentComponent,
    //SiteComponent,
    //ArticleComponent,
    //CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //MarkdownModule.forRoot(),
    SiteModule,
    LoginRoutingModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    //CategoryService,
    //ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
