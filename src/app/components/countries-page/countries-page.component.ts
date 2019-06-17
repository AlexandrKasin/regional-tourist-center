import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {

  alphabet = [];

  constructor() {
    for (let i = 1040; i <= 1071; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }

  countries = [
    {
      name: 'Афганистан',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Албания',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Алжир',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Бангладеш',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Канада',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Хорватия',
      business: 'требуется виза',
      travel: 'требуется виза'
    }, {
      name: 'Египет',
      business: 'требуется виза',
      travel: 'требуется виза'
    },
  ];

  ngOnInit() {
  }

}
