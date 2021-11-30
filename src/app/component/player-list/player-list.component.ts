import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players$: Observable<Player[]>;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.players$ = this.playerService.getAllPlayers();
  }
}
