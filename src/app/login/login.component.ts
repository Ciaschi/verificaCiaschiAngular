import { Component } from '@angular/core';
import { Login } from '../../models/Login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../login-service.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Effettua login';
  newLogin : Login = {username: "", pw: ""};
  user = [];
  new : boolean = false;
  constructor (private loginService : LoginServiceService){}
  data: String = "username: '';pw: ''";
  

  login(){
    this.loginService.login(this.newLogin).subscribe(remotedata => {this.data = remotedata;
      console.log(this.data)
    })
  }
  /*singin(): boolean{
    if(){
      this.user.add(this.newLogin)
      return true;
    }
    return false;
  }*/
}
