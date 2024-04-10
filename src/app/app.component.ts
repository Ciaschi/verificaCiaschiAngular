import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from '../models/Login';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Effettua login';
  
}
