import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


export class Leftbar {
  state: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('leftbarState', [
      state('show', style({transform: 'translateX(-100%)'})),
    ])
  ]
})

export class AppComponent {

  leftbar: Leftbar = new Leftbar();

  changeLeftbarState(): void {

    this.leftbar.state = (this.leftbar.state === 'show') ? 'hide' : 'show';
    
    console.log('[Info] call changeLeftbarState method in AppComponent.');
  }
}
