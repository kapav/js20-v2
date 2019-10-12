import {Component, OnInit} from '@angular/core';

import {EvidenceService} from './../../services/evidence.service';

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  public itemsSource: string[]

  messageFromTextbox: string
  messageKeypress: string
  messageTwoEvents: string
  fillingList: string[] = []

  // private evidenceService: EvidenceService внедрение зависимости через конструктор
  constructor(private evidenceService: EvidenceService) {}

  ngOnInit() {
    this.itemsSource = this.evidenceService.getData();
  }

  onKeyup(data) {
    this.messageFromTextbox = data;
  }

  onKeyupKeypress(data) {
    this.messageKeypress = data;
  }

  onKeyupTwoEvents(data) {
    this.messageTwoEvents = data;
  }

  addListItem(item: string) {
    this.fillingList.push(item);
  }

}
