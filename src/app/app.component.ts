import {Component} from '@angular/core';
import {MobileMenuBehaviorService} from './services/mobile-menu-service/mobile-menu-behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regional-tourist-center';

  constructor(private menuBehaviorService: MobileMenuBehaviorService) {

  }
}
