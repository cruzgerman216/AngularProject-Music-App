import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

const CLIENT_ID = '86c3692b956f4c72a651bbc1f954c2ef';
const CLIENT_SECRET = '1d009847f7a24d009a17e5490c119cc2';
const REDIRECT_URI = 'http://localhost:4200/musiclist/';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isLoginMode = false;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  toggleLogin(){
    this.isLoginMode = !this.isLoginMode;
  }


  spotifyLogin(){
    this.isLoginMode=true;
    this.authService.spotifyLogin();
    // this.isLoginMode = !this.isLoginMode;
    // return this.http.get(
    //   'https://accounts.spotify.com/authorize',
    //   {params: {
    //     'client_id' : CLIENT_ID,
    //     'response_type' : 'code',
    //     'redirect_uri' : REDIRECT_URI}
    //   }).pipe(catchError((err) => {
    //     console.log(err);
    //     throw err;
    //   })).subscribe(
    //     response => {
    //       console.log(response)
    //     }
    //   );
  }

  // spotifyLogin(){
  //   return this.http.get(
  //     'https://accounts.spotify.com/authorize',
  //     {params: {
  //       'client_id' : CLIENT_ID,
  //       'response_type' : 'code',
  //       'redirect_uri' : REDIRECT_URI}
  //     }).pipe(catchError((err) => {
  //       console.log(err);
  //       throw err;
  //     })).subscribe(
  //       response => {
  //         console.log(response)
  //       }
  //     );
  // }


  onSubmit(form: NgForm){
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

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
