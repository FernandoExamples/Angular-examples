import { Component, OnInit } from '@angular/core';
import { Cita } from './models/cita';
import { OnChange } from 'property-watch-decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Citas';
  @OnChange('watchCitas') citas: Cita[] = [];

  agregarCita(cita: Cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(nombre: string) {
    this.citas = this.citas.filter((x) => x.nombre != nombre);
  }

  watchCitas(value: Cita[]) {
    setTimeout(() => localStorage.setItem('citas', JSON.stringify(value)), 10);
  }

  ngOnInit(): void {
    const citas = localStorage.getItem('citas');
    if (citas) this.citas = JSON.parse(citas);
  }
}
