import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/model';
import { TeamService } from '../../service/team.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  divisionTeams;

  constructor(
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService.getAllTeams()
      .subscribe((teams: Team[]) => {
        this.divisionTeams = this.groupBy(teams, 'division');
    });
  }

  private groupBy(arr: Array<Object>, key: string): Object {
    return arr.reduce((acc, v) => {
      (acc[v[key]] = acc[v[key]] || []).push(v);
      return acc;
    }, {});
  }
}
