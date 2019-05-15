import {Injectable} from '@angular/core';
import {SERVER} from '../../app-settings/appSettings';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(authParams) {
    return this.http.post(SERVER + '/login', authParams);
  }
}
