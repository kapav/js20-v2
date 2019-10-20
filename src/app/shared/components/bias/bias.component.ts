import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'bias',
  templateUrl: './bias.component.html',
  styleUrls: ['./bias.component.scss']
})
export class BiasComponent implements OnInit {

  color: string

  colorFromBias = 'fuchsia'

  constructor() {}

  ngOnInit() {}

}
