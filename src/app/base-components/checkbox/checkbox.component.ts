import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  constructor() {
  }

  isActive = false;

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() label: string;

  onClick() {
    this.isActive = !this.isActive;
    this.notify.emit(this.isActive);
  }

  ngOnInit() {
  }

}
