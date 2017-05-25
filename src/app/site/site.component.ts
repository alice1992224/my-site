import { Component } from '@angular/core';

@Component({
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})

export class SiteComponent {

  isShowOnPage: boolean = true;

  changeLeftbarState(): void {
    this.isShowOnPage = (this.isShowOnPage) ? false : true;    
  }
}
