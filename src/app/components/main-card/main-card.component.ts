import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardInfo } from '../../models/card';


@Component({
  selector: 'main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  @Input() card: any;
  @Output() emitValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  click(card?: any) {
    this.emitValue.emit(this.card.id)
  }

}
