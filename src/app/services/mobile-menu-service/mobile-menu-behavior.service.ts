import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuBehaviorService {
  menuIsOpen: BehaviorSubject<boolean>;

  constructor() {
    this.menuIsOpen = new BehaviorSubject<boolean>(false);
  }

  updatedDataSelection(data: boolean) {
    this.menuIsOpen.next(data);
  }
}
