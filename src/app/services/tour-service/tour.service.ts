import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER} from '../../app-settings/appSettings';
import objectToFormData from 'object-to-formdata';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {
  }

  createTour(tourDto: any) {
    const tour = {
      amountDays: 10,
      tourDescription: [tourDto.tourDescription]
    };
    const formData = objectToFormData(tour, {indices: true});
    this.http.post(SERVER + '/create/tour', formData).subscribe(a => {
    });
  }
}
