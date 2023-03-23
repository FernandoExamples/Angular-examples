import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Piano';

  playSound(nota: number) {
    const audio = new Audio(`../assets/sonidos/note${nota}.wav`);
    audio.load();
    audio.play();
  }
}
