import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dados';
  dado1 = '../assets/img/dice1.png';
  dado2 = '../assets/img/dice2.png';

  tirarDados() {
    const random1 = this.#generarAleatorio();
    const random2 = this.#generarAleatorio();

    this.dado1 = `../assets/img/dice${random1}.png`;
    this.dado2 = `../assets/img/dice${random2}.png`;
  }

  #generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
