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
  sortOn = { column: null, reverse: false };

  constructor(
    private playerService: PlayerService
  ) { }

  togglePlayerListSort(columnKey: string): void {
    // update sorting input state
    if (this.sortOn.column === columnKey)
      if (this.sortOn.reverse) this.sortOn.column = null
      else this.sortOn.reverse = !this.sortOn.reverse
    else {
      this.sortOn.column = columnKey
      this.sortOn.reverse = false
    }

    this.players.sort((a, b) => {
      return (this.sortOn.reverse ? -1 : 1) * (a[this.sortOn.column] - b[this.sortOn.column])
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
