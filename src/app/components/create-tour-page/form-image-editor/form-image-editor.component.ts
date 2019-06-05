import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-image-editor',
  templateUrl: './form-image-editor.component.html',
  styleUrls: ['./form-image-editor.component.css']
})
export class FormImageEditorComponent implements OnInit {

  constructor() {
  }

  @Input() inputFormImages = [];
  @Output() changed = new EventEmitter<any>();

  inputImages = [];
  urlImage = [];

  getImgUrl(img) {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e: any) => {
      this.urlImage.push(e.target.result);
    };
  }

  onFileSelected(event) {
    const images = Object.keys(event.target.files).map((key) => {
      return event.target.files[key];
    });
    images.map((img) => {
      const isExistsImage = this.inputImages.map(el => el.name).indexOf(img.name);
      if (isExistsImage === -1) {
        this.inputImages.push(img);
        this.getImgUrl(img);
      }
    });
    this.changed.emit(this.inputImages);
  }

  ngOnInit() {
    const images = Object.keys(this.inputFormImages).map((key) => {
      return this.inputFormImages[key];
    });
    images.map((img) => {
      this.getImgUrl(img);
    });
  }

}
