import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [{ "id": 1, "name": "admin", "password": "123", "familyName": "", "phone": "", "login": "", "languages": [], "company": "" }];
  public loggedUser?: string ;
  public isloggedIn: Boolean = false;
  constructor() { }

  SignIn(user :User):Boolean{
    let validUser:Boolean = false;
    this.users.forEach((curUser) => {
      if(user.name===curUser.name && user.password===curUser.password){
        validUser=true;
        this.loggedUser=curUser.name;
        this.isloggedIn=true;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isLoggedIn',String(this.isloggedIn));

      }
    });
    return validUser;
  }
}
