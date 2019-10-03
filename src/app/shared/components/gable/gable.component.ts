import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'gable',
  templateUrl: './gable.component.html',
  styleUrls: ['./gable.component.scss']
})
export class GableComponent implements OnInit {

  @Input('gableLettering') obscureInscription: string
  @Input('gableAnnouncement') showNotice: string
  @Input('gableToggle') dissembled: boolean

  constructor() {}

  ngOnInit() {}

}
