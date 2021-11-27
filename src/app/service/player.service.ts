import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get("/players/");
  }

  getPlayersByTeamId(teamId: number): Observable<any> {
    return this.getAllPlayers()
      .pipe(map((players) => players.filter(
        (player) => player.teamId === teamId
      )))
  }
}
