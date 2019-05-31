import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-tour-page',
  templateUrl: './create-tour-page.component.html',
  styleUrls: ['./create-tour-page.component.css', './form-input/form-input.component.css']
})
export class CreateTourPageComponent implements OnInit {

  constructor() {
  }

  numberPage = 1;

  ngOnInit() {
  }

  onChangePage(page) {
    this.numberPage = page;
  }
}
