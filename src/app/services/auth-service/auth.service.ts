import {Injectable} from '@angular/core';
import {SERVER} from '../../app-settings/appSettings';
import {HttpClient} from '@angular/common/http';
import {LoginBehaviorService} from '../login-behavior-servis/login-behavior.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private loginBehaviorService: LoginBehaviorService) {
  }

  login(authParams) {
    return this.http.post(SERVER + '/login', authParams);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.loginBehaviorService.updatedDataSelection(false);
  }
}
