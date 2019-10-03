import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component ({
  selector: 'garret',
  templateUrl: './garret.component.html',
  styleUrls: ['./garret.component.scss']
})
export class GarretComponent implements OnInit {

  @Input('garretLettering') tuckInscription: string
  @Input('garretAnnouncement') revealNotice: string
  @Input('garretToggle') stashed: boolean

  positiveNotificationFromGarret = 'Отображено из Garret\'а'
  negativeNotificationFromGarret = 'Скрыто в Garret\'е'

  constructor() {}

  ngOnInit() {}

}
