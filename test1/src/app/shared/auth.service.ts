import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  private BASE_URL = 'http://localhost:3000/';

  register( name:string,email:string,password:string){

    return this.http.post(this.BASE_URL+ 'register', {name,email,password});

  }

  login( email:string,password:string){

    return this.http.post(this.BASE_URL+ 'login', {email,password});

  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if (token){
return true ; 
}else{

  return false;
}
  }

  getUserDataFromToken(){
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }

  

}
