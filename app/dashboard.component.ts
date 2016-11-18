import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  players: Player[] = [];

  constructor(private playerService: PlayerService){}

  ngOnInit(): void{
    this.playerService.getPlayers()
      .then(players => this.players = players.slice(0, 5));
  }
}
