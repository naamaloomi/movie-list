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
        <li *ngFor="let player of players">
          <span class="badge">{{player.id}}</span> {{player.name}}
        </li>
      </ul>
      <div><label>id: </label>{{player.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="player.name" placeholder="name"/>
      </div>
      `
})

export class AppComponent {
  title = 'Movie List';
  players = PLAYERS;
  player: Player = {
    id: 1,
    name: 'Martin Hong'
  };
}
