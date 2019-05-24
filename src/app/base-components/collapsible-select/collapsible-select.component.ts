import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-select',
  templateUrl: './collapsible-select.component.html',
  styleUrls: ['./collapsible-select.component.css']
})
export class CollapsibleSelectComponent implements OnInit {

  constructor() {
  }

  isOpen = true;

  onClickSelect() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
