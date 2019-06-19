import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  constructor() {
  }

  type = 1;

  selectedDateRange = {
    startDate: moment(),
    endDate: moment()
  };

  changeType(t) {
    this.type = t;
  }

  ngOnInit() {
  }

}
