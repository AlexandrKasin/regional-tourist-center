import { Component, OnInit } from '@angular/core';
import {LoginBehaviorService} from '../../services/login-behavior-servis/login-behavior.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginBehaviorService: LoginBehaviorService) {
  }

  ngOnInit() {
  }

  onClickReload() {

  }
}
