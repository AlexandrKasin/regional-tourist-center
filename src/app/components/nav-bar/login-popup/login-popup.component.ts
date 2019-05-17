import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth-service/auth.service';
import {LoginBehaviorService} from '../../../services/login-behavior-servis/login-behavior.service';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {SetAuthParams} from '../../../ngrx/actions/auth.actions';
import {Token} from '../../../models/token';
import {getToken} from 'src/app/ngrx/selectors/auth.selectors';


@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css', '../nav-bar.component.css']
})
export class LoginPopupComponent implements OnInit {

  constructor(private authService: AuthService, private loginBehaviorService: LoginBehaviorService,
              private router: Router, private store: Store<{ token: Token }>) {
    this.isVisible = loginBehaviorService.isUserLoggedIn.getValue();
  }

  token: any;
  isVisible: boolean;
  isOpen = false;
  authParams = {
    email: '',
    password: '',
  };

  open() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  submit() {
    this.authService.login(this.authParams).subscribe((response: Token) => {


      this.store.dispatch(new SetAuthParams(response));
      this.loginBehaviorService.updatedDataSelection(true);
      this.isVisible = this.loginBehaviorService.isUserLoggedIn.getValue();
      sessionStorage.setItem('token', response.accessToken);
      this.router.navigate(['/']);
    });
  }


  ngOnInit() {
  }
}
