import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Fernando';

  constructor() {
    setTimeout(() => this.nombre = "Carlos", 3000)
  }
}
