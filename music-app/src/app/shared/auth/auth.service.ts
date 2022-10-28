import {HttpClient} from "@angular/common/http";

const SIGNUP_KEY = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAklE7r4FP7CvxWyMmJ3YKXBE5pA6pTocU';

export class AuthService{

  constructor(private http: HttpClient){}

  signup(email: string, password: string){
    this.http.post(SIGNUP_KEY,
      {
        email,
        password,
        returnSecureToken: true
      })
  }
}
