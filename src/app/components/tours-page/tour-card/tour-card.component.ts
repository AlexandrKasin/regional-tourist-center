import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() price: string;
  @Input() amountDays: number;
  @Input() img: string;

  ngOnInit() {
  }

}
