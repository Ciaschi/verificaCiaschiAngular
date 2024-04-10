import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private httpClient: HttpClient) {   }

  login(us:String, pw:String){
    return this.httpClient.post("http://localhost:8080/login?", data =>{
      "username:"+us+";pw: "+pw+";";
    });
  }
}
