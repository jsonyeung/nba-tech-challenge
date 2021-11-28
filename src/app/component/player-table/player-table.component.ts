import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/model/model';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit{
  @Input() data: Player[];
  columns: Columns[];
  config: Config;

  constructor() { }

  ngOnInit() {
    this.config = { 
      ...DefaultConfig,
      rows: 25
    };

    this.columns = [
      { key: 'firstName', title: 'First Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'weightPounds', title: 'WT (lb)' },
      { key: 'heightInches', title: 'HT (in)' },
      { key: 'position', title: 'Pos' }
    ];
  }
}
