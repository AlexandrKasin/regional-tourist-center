import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER} from '../../app-settings/appSettings';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  registerProfile(registerForm) {
    return this.http.post(SERVER + '/register', registerForm);
  }
}
