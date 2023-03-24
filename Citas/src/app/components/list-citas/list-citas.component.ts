import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css'],
})
export class ListCitasComponent {
  @Input() citas: Cita[] = [];
  @Output() onDeleteCita = new EventEmitter<string>();

  eliminarCita(nombre: string) {
    this.onDeleteCita.emit(nombre);
  }
}
