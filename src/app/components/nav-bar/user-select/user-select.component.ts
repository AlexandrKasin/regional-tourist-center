import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {LoginBehaviorService} from '../../../services/login-behavior-servis/login-behavior.service';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  constructor(private loginBehaviorService: LoginBehaviorService, private authService: AuthService,
              private selectRef: ElementRef) {
  }

  isOpen = false;

  selectClick() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.selectRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  ngOnInit() {
  }

}
