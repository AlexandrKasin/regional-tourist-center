import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TourService} from '../../services/tour-service/tour.service';

@Component({
  selector: 'app-create-tour-page',
  templateUrl: './create-tour-page.component.html',
  styleUrls: ['./create-tour-page.component.css', './form-input/form-input.component.css']
})
export class CreateTourPageComponent implements OnInit {

  constructor(private tourService: TourService) {
  }

  createTourForm = new FormGroup({
    tourDescription: new FormControl({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(4000)])
    }),
    inputFormImages: new FormControl('')
  });

  numberPage = 1;
  htmlContent = '';

  ngOnInit() {
  }

  changeImageEditor(event: any) {
    this.createTourForm.patchValue({inputFormImages: event});
  }

  onChangeTitle(event: any) {
    this.createTourForm.patchValue(Object.assign(this.createTourForm.value.tourDescription, {title: event}));
  }

  onChangeDescription(event: any) {
    this.createTourForm.patchValue(Object.assign(this.createTourForm.value.tourDescription, {description: event}));
  }

  submit() {
    console.log(this.createTourForm.value);
    this.tourService.createTour(this.createTourForm.value);
  }

  onChangePage(page) {
    this.numberPage = page;
  }
}
