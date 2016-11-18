import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from "./player";
import { PlayerService } from "./player.service";

@Component({
  selector: 'my-player-detail',
  template: `
    <div *ngIf="player">
      <h2>{{player.name}} details:</h2>
      <div><label>id: </label>{{player.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="player.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class PlayerDetailComponent implements OnInit{
  @Input() player: Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void{
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.playerService.getPlayer(id)
        .then(player => this.player = player);
    });
  }
}
