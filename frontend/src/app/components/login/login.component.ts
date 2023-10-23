import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = {
    email: "",
    password: ""
  }
  login() {
  console.log("login...")
  console.log("user:",this.user)
}
}