import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
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
  primaryInscription = 'Первичная надпись'
  thenBlock: TemplateRef<any>|null = null
  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null

  constructor() {}

  ngOnInit() { this.thenBlock = this.primaryBlock }

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock
  }

}
