import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  buryInscription = 'Скрываемая надпись';
  evinceNotice = 'Отображаемое уведомление';
  lurked: boolean

  positiveNotificationFromHomePage = 'Отображено на HomePag\'е'
  negativeNotificationFromHomePage = 'Скрыто на HomePag\'е'

  constructor() {}

  ngOnInit() {}

  tumblerFromStorey(portrayed) {
    this.lurked = portrayed;
  }

}
