import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { TeamDetailsComponent } from './component/team-details/team-details.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerTableComponent } from './component/player-table/player-table.component';
import {ServerMockService} from "./mock/server-mock.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamListComponent},
      { path: 'players', component: PlayerListComponent},
      { path: 'details/:teamId', component: TeamDetailsComponent}
    ],{ useHash: true, relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PlayerTableComponent,
    TeamListComponent,
    TeamDetailsComponent,
    PlayerListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerMockService, multi: true }]
})
export class AppModule { }
