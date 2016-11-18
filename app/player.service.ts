import { Injectable } from '@angular/core'

import { Player } from './player'
import { PLAYERS } from './mock-players'

@Injectable()
export class PlayerService{
  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id))
  }

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  getPlayersSlowly(): Promise<Player[]> {
    return new Promise<Player[]>(resolve =>
      setTimeout(resolve, 2000))
      .then(() => this.getPlayers())
  }
}
