import {Component, OnInit} from '@angular/core';

// @ts-ignore
import FlagUk from '../../../../assets/img/flag/uk.png';
// @ts-ignore
import FlagRussia from '../../../../assets/img/flag/russia.png';
// @ts-ignore
import FlagPoland from '../../../../assets/img/flag/poland.png';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent implements OnInit {

  constructor() {
  }

  selectIsOpen = false;
  countries = [
    {icon: FlagUk, shortCountryName: 'uk-UK', name: 'UK'},
    {icon: FlagRussia, shortCountryName: 'ru-RU', name: 'Russia'},
    {icon: FlagPoland, shortCountryName: 'pl-PL', name: 'Poland'},
  ];
  currentLanguage = this.countries[1];

  ngOnInit() {
  }

  onClickFlag() {
    this.selectIsOpen = !this.selectIsOpen;
  }

  onSelectLanguage(country) {
    this.currentLanguage = country;
    this.selectIsOpen = false;
  }

}


