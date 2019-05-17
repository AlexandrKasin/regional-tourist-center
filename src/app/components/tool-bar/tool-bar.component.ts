import { Component, OnInit } from '@angular/core';
import {MobileMenuBehaviorService} from '../../services/mobile-menu-service/mobile-menu-behavior.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(private menuBehaviorService: MobileMenuBehaviorService) { }

  ngOnInit() {
  }

}
