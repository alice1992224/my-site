import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  @Output() toggleLeftbarRequest: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleLeftBar(): void {
    this.toggleLeftbarRequest.emit(null);
  }

}
