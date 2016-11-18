import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from "./player";
import { PlayerService } from "./player.service";

@Component({
  moduleId: module.id,
  selector: 'my-player-detail',
  templateUrl: 'player-detail.component.html'
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
