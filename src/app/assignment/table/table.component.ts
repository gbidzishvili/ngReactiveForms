import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input()
  users: any = [];
  languageCode = [
    {
      nameGeo: 'სახლი',
      nameEng: 'home',
    },
    {
      nameGeo: 'კონტაქტები',
      nameEng: 'contacts',
    },
    {
      nameGeo: 'სერვისები',
      nameEng: 'services',
    },
  ];
  ngOnInit(): void {}
  changeLanguage() {
    localStorage['languageCode'] === 'geo'
      ? (localStorage['languageCode'] = 'eng')
      : (localStorage['languageCode'] = 'geo');
  }
}
