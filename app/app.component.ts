import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <my-players></my-players>
  `
})

export class AppComponent {
  title = 'Movie Battle'
}
