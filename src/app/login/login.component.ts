import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm(): void{
    this.loginForm = this.fb.group({
      account: ['', Validators.required], 
      password: ['', Validators.required],
    });
  }
  /*
  isShowOnPage: boolean = true;

  changeLeftbarState(): void {
    this.isShowOnPage = (this.isShowOnPage) ? false : true;    
  }
  */
}
