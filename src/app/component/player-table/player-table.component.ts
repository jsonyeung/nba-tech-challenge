import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/model/model';

@Component({
  selector: 'player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent {
  constructor() { }
  @Input() data: Player[];
}
