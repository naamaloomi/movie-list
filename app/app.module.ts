import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule}  from "@angular/router";

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component'
import { PlayersComponent } from "./player.component";
import { PlayerService } from "./player.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'players',
        component: PlayersComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    PlayersComponent
  ],
  providers: [ PlayerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
