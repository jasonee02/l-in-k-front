import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss'],
})
export class CommunityCardComponent implements OnInit {
  @Input() card: any;
  @Output() emitValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  click(card?: any) {
    this.emitValue.emit(this.card.id)
  }

}
