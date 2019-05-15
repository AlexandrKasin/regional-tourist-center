import {Component, OnInit} from '@angular/core';
import {MobileMenuBehaviorService} from '../../../services/mobile-menu-service/mobile-menu-behavior.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  constructor(private menuBehaviorService: MobileMenuBehaviorService) {
  }

  ngOnInit() {
  }

  btnClick() {
    this.menuBehaviorService.updatedDataSelection(!this.menuBehaviorService.menuIsOpen.getValue());
  }
}
