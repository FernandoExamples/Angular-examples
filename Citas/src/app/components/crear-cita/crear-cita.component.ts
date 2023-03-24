import { Component, EventEmitter, Output } from '@angular/core';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent {
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  sintomas: string = '';
  error: string = '';

  @Output() onCreateCita = new EventEmitter<Cita>();

  agregarCita() {
    if (!this.nombre || !this.fecha || !this.hora || !this.sintomas) {
      this.error = 'Todos los campos son obligatorios';
      return;
    }

    const cita: Cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas,
    };

    this.onCreateCita.emit(cita);
    this.resetform();
  }

  resetform() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
