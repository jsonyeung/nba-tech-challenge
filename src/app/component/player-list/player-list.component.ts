import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  sort = {
    column: null,
    reverse: false
  };

  constructor(
    private playerService: PlayerService
  ) { }

  sortPlayerList(column): void {
    if (this.sort.column === column)
      this.sort.reverse = !this.sort.reverse
    else {
      this.sort.column = column
      this.sort.reverse = false
    }

    this.players.sort((a, b) => {
      return (this.sort.reverse ? -1 : 1) * (a[this.sort.column] - b[this.sort.column])
    })
  }

  ngOnInit(): void {
    this.playerService.getAllPlayers()
      .subscribe((result) => {
        this.players = result;
      }
    )
  }
}
