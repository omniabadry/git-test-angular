import { HttpClient } from '@angular/common/http';
import { Person } from './../_model/person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "https://mearn-stack-backend-test.herokuapp.com/";

  constructor(private httpClient: HttpClient) { }

  Register(person: Person) {
   return this.httpClient.post(`${this.baseURL}user/register`,person);
}

  login(person: Person){
    return this.httpClient.post(`${this.baseURL}user/login`, person);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  
}

