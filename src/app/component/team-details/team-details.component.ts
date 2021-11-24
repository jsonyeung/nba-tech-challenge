import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Team } from '../../model/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit{
  teamId: number;
  team: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ){
    this.teamId = +this.route.snapshot.paramMap.get("teamId");
  }

  ngOnInit(): void {
    this.teamService.getTeamDetails(this.teamId).subscribe(result => {
      this.team = result;
    });
  }

}
