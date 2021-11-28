import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';

@Component({
  selector: 'app-all-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  sortOn = { column: null, reverse: false };

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers()
      .subscribe((result) => {
        this.players = result;
      }
    )
  }
}
