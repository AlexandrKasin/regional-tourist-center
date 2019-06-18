import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  numberImg = 0;

  @Input() images: string[];

  onClickRight() {
    if (this.numberImg + 1 < this.images.length) {
      this.numberImg++;
    }
  }

  onClickLeft() {
    if (this.numberImg - 1 >= 0) {
      this.numberImg--;
    }
  }

  ngOnInit() {
  }

}
