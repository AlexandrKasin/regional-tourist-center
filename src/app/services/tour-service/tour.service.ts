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
    const tour = {
      amountDays: 10,
      tourDescription: [{
        title: 'Hello',
        language: {languageName: 'english'}
      },
        {
          title: 'Hesdgfdsfgllo',
          language: {languageName: 'englishsdfg'}
        }
      ]
    };
    const formData = objectToFormData(tour, {indices: true});
    this.http.post(SERVER + '/create/tour', formData).subscribe(a => {
    });
  }
}
