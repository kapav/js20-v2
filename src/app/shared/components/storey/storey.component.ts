import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'storey',
  templateUrl: './storey.component.html',
  styleUrls: ['./storey.component.scss']
})
export class StoreyComponent implements OnInit {

  @Output('onStoreyToggle') tumblerToHomePage = new EventEmitter();
  illustrated: boolean
  
  positiveNotificationFromStorey = 'Отображено из Store\'я';
  negativeNotificationFromStorey = 'Скрыто в Store\'е';

  constructor() {}

  ngOnInit() {}

  tumblerFromSlab(illustrated) {
    this.illustrated = illustrated;
    this.tumblerToHomePage.emit(this.illustrated);
  }

}
