import { Component } from '@angular/core';

export class Player {
  id: number;
  name: string;
}

const PLAYERS: Player[] = [
  {id: 1, name: 'Martin Hong'},
  {id: 2, name: 'Kristofer Sanchez'},
  {id: 3, name: 'Mikael Rydin'}
];

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Players</h2>
      <ul class="players">
        <li *ngFor="let player of players" (click)="onSelect(player)">
          <span class="badge">{{player.id}}</span> {{player.name}}
        </li>
      </ul>
      `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
  title = 'Movie List';
  players = PLAYERS;
  selectedPlayer: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}
