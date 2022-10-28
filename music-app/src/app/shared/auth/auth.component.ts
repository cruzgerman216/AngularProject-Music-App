import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isLoginMode = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleLogin(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading

    if(this.isLoginMode){
      authObs = this.authService.login(email, password)
    }else{
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['./musiclist'])
      }
    )

    form.reset();
  }


}
