import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css'],
})
export class CountEmpleadosComponent {
  @Input() todos: number = 0;
  @Input() masculinos: number = 0;
  @Input() femeninos: number = 0;
  sexo: string = 'Todos';

  @Output() onChangeSexo = new EventEmitter<string>();
  changeSexo = () => this.onChangeSexo.emit(this.sexo);
}
