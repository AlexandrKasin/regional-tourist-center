import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../services/register-service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../nav-bar/login-popup/login-popup.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = {
    name: '',
    surname: '',
    email: '',
    password: '',
    retypePassword: ''
  };

  isRegister = false;

  constructor(private registerService: RegisterService) {
  }

  register() {
    this.isRegister = true;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.registerProfile(this.registerForm);
  }
}
