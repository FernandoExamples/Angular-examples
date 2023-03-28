import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private listEmpleado: Empleado[] = [
    {
      nombre: 'Lucas Martinez',
      correo: 'lucas@gmail.com',
      estadoCivil: 'Soltero',
      telefono: '4452236541',
      sexo: 'Masculino',
      fechaIngreso: new Date(),
    },
    {
      nombre: 'Maria Martinez',
      correo: 'Maria@gmail.com',
      estadoCivil: 'Soltera',
      telefono: '4546598514',
      sexo: 'Femenino',
      fechaIngreso: new Date(),
    },
  ];

  constructor() {}

  get empleados() {
    return this.listEmpleado;
  }

  addEmpleado(empleado: Empleado) {
    this.listEmpleado.push(empleado);
  }

  editEmpleado(nombre: string, newData: Partial<Empleado>) {
    this.listEmpleado = this.listEmpleado.map((x) =>
      x.nombre == nombre ? { ...x, ...newData } : x
    );
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  getEmpleado(nombre: string) {
    return this.listEmpleado.find((x) => x.nombre == nombre);
  }
}
