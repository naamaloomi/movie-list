import { Component } from '@angular/core';

export class Player {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Players</h2>
      <div><label>id: </label>{{player.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="player.name" placeholder="name"/>
      </div>
      `
})

const PLAYERS: Player[] = [
  {id: 1, name: 'Martin Hong'},
  {id: 2, name: 'Kristofer Sanchez'},
  {id: 3, name: 'Mikael Rydin'}
];

export class AppComponent {
  title = 'Movie List';
  player: Player = {
    id: 1,
    name: 'Martin Hong'
  };
}
