import {Component, OnInit} from '@angular/core';
import {LabelType} from 'ng5-slider';
import {Moment} from 'moment';
import * as moment from 'moment';


@Component({
  selector: 'app-tour-filter',
  templateUrl: './tour-filter.component.html',
  styleUrls: ['./tour-filter.component.css']
})
export class TourFilterComponent implements OnInit {

  constructor() {
  }

  minValue = 3;
  maxValue = 30;
  options = {
    floor: 3,
    ceil: 30,
    translate: () => {
      return '';
    }
  };
  selectedDateRange = {
    startDate: moment(),
    endDate: moment()
  };

  ngOnInit() {
  }

}
