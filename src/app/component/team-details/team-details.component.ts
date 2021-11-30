import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit{
   unsub: Subject<boolean> = new Subject<boolean>();
  teamId: number;
  team: Team;
  players: Player[];

  constructor(
    private teamService: TeamService,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {
    this.teamId = +this.route.snapshot.paramMap.get("teamId");
  }

  ngOnInit(): void {
    this.teamService.getTeamDetails(this.teamId)
    .pipe(takeUntil(this.unsub))
      .subscribe(result => {
        this.team = result;
      }
    );

    this.playerService.getPlayersByTeamId(this.teamId)
    .pipe(takeUntil(this.unsub))
      .subscribe((result) => {
        this.players = result;
      }
    )
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.complete();
  }
}
