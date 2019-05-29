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

  createTour() {
    const formdata = objectToFormData();

    const datesPrices = [
      {
        startDate: 'asdad',
        language: {
          name: 'asd'
        }
      }
    ];
    const nameOfArray = Object.keys({datesPrices})[0];
    datesPrices.forEach((data, index) => {
      // tslint:disable-next-line:forin
      for (const key in data) {
        debugger
        formdata.append(nameOfArray + '[][' + index + '][' + key + ']', data[key]);
      }
    });
    console.log(formdata.get('datesPrices'));
    this.http.post(SERVER + '/create/tour', formdata).subscribe(a => {
    });
  }
}
