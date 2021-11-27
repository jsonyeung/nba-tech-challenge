import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { PlayerService } from '../../service/player.service';
import { Team, Player } from '../../model/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit{
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
      .subscribe(result => {
        this.team = result;
      }
    );

    this.playerService.getPlayersByTeamId(this.teamId)
      .subscribe((result) => {
        this.players = result;
      }
    )
  }
}
