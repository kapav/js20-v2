import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'slab',
  templateUrl: './slab.component.html',
  styleUrls: ['./slab.component.scss']
})
export class SlabComponent implements OnInit {

  @Output('onSlabToggle') tumblerToStorey = new EventEmitter();

  demonstrated: boolean = false
  positiveNotificationFromSlab = 'Отображено из Slab\'а';
  negativeNotificatinFromSlab = 'Скрыто в Slab\'е';

  constructor() {}

  ngOnInit() {}
    
  onClick() {
    this.demonstrated = !this.demonstrated;
    this.tumblerToStorey.emit(this.demonstrated);
  }
  
}
