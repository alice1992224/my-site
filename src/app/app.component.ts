import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  isShowOnPage: boolean = true;

  changeLeftbarState(): void {

    this.isShowOnPage = (this.isShowOnPage) ? false : true;    
    console.log('[Info] call changeLeftbarState method in AppComponent.');
  }
}
