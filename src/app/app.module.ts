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

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteLeftbarComponent,
    SiteContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot(),
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
