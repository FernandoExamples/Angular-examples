import { Component } from '@angular/core'
import { Tarea } from 'src/app/models/Tarea'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  listTareas: Tarea[] = []
  nombreTarea = ''

  agregarTarea() {
    if (!this.nombreTarea) return
    const tarea = new Tarea(this.nombreTarea)
    this.listTareas.push(tarea)
    this.nombreTarea = ''
  }

  eliminarTarea(index: number) {
    this.listTareas.splice(index, 1)
  }

  terminarTarea(index: number) {
    this.listTareas[index].estado = !this.listTareas[index].estado
  }
}
