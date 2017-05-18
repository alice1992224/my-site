import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLeftbarComponent } from './site-leftbar/site-leftbar.component';
import { SiteContentComponent } from './site-content/site-content.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
