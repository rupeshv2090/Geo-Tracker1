import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedIn: boolean;
  constructor() { }

  set setUserIsLoggedIn (isLogin : boolean){
    this.isLoggedIn = isLogin;
  }

  get getUserIsLoggedIn(){
    return this.isLoggedIn;
  }
}
