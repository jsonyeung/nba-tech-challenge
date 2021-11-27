import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

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
