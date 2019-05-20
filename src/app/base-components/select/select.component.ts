import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private selectRef: ElementRef) {
  }

  isOpen = false;
  @Input() name: string;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.selectRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }


  ngOnInit() {
  }

}
