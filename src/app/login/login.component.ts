import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm(): void{
    this.loginForm = this.fb.group({
      account: ['', Validators.required], 
      password: ['', Validators.required],
    });
  }

  submitLogin(): void{
    console.log('in submitLogin');
    console.log(this.loginForm.get('account').value);
    console.log(this.loginForm.get('password').value);
    if(this.loginForm.get('account').value == 'chicken' &&
       this.loginForm.get('password').value == 'chicken'){
      this.router.navigate(['/admin']);
    }
  }

  /*
  isShowOnPage: boolean = true;

  changeLeftbarState(): void {
    this.isShowOnPage = (this.isShowOnPage) ? false : true;    
  }
  */
}
