import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginBehaviorService {
  isUserLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    const initialValue = sessionStorage.getItem('isUserLoggedIn');
    this.isUserLoggedIn = new BehaviorSubject<boolean>(Boolean(initialValue));
  }

  updatedDataSelection(data: boolean) {
    this.isUserLoggedIn.next(data);
    sessionStorage.setItem('isUserLoggedIn', String(data));
  }
}
