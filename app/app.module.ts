import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule }  from "@angular/router";

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component'
import { PlayersComponent } from "./player.component";
import { PlayerService } from "./player.service";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'players',
        component: PlayersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerDetailComponent,
    PlayersComponent
  ],
  providers: [ PlayerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
