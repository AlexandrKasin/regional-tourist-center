import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-base',
  templateUrl: './tour-base.component.html',
  styleUrls: ['./tour-base.component.css']
})
export class TourBaseComponent implements OnInit {

  images = [
    'assets/img/pogorany/pogorany_1.jpg',
    'assets/img/pogorany/pogorany_2.jpg',
    'assets/img/pogorany/pogorany_3.jpg',
    'assets/img/pogorany/pogorany_4.jpg',
    'assets/img/pogorany/pogorany_5.jpg',
    'assets/img/pogorany/pogorany_6.jpg',
    'assets/img/pogorany/pogorany_7.jpg',
    'assets/img/pogorany/pogorany_8.jpg',
    'assets/img/pogorany/pogorany_9.jpg',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
