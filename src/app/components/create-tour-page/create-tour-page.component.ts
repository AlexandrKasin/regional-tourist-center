import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-tour-page',
  templateUrl: './create-tour-page.component.html',
  styleUrls: ['./create-tour-page.component.css', './form-input/form-input.component.css']
})
export class CreateTourPageComponent implements OnInit {

  constructor() {
  }

  createTourForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(4000)]),
    inputFormImages: new FormControl('')
  });

  numberPage = 1;
  htmlContent = '';

  ngOnInit() {
  }

  changeImageEditor(event: any) {
    this.createTourForm.patchValue({inputFormImages: event});
  }

  submit() {
    console.log(this.createTourForm.get('title').valid);
  }

  onChangePage(page) {
    this.numberPage = page;
  }
}
