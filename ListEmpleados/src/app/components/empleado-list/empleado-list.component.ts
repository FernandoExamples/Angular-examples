import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent {
  listEmpleado: Empleado[] = [
    {
      id: 1,
      nombre: 'Anastasie',
      apellido: 'Ratnege',
      sexo: 'Femenino',
      salario: 5316.88,
    },
    {
      id: 2,
      nombre: 'Coral',
      apellido: 'Bracegirdle',
      sexo: 'Femenino',
      salario: 6752.55,
    },
    {
      id: 3,
      nombre: 'Frederic',
      apellido: 'Bentje',
      sexo: 'Masculino',
      salario: 5043.76,
    },
    {
      id: 4,
      nombre: 'Uri',
      apellido: 'Pentercost',
      sexo: 'Masculino',
      salario: 8084.37,
    },
    {
      id: 5,
      nombre: 'Dukie',
      apellido: 'Trassler',
      sexo: 'Masculino',
      salario: 9692.09,
    },
    {
      id: 6,
      nombre: 'Perry',
      apellido: 'Meindl',
      sexo: 'Masculino',
      salario: 9465.76,
    },
    {
      id: 7,
      nombre: 'Julina',
      apellido: 'Fontelles',
      sexo: 'Femenino',
      salario: 5555.27,
    },
    {
      id: 8,
      nombre: 'Ahmed',
      apellido: 'Dewer',
      sexo: 'Genderqueer',
      salario: 8199.0,
    },
    {
      id: 9,
      nombre: 'Marshall',
      apellido: 'Jirick',
      sexo: 'Masculino',
      salario: 8762.55,
    },
    {
      id: 10,
      nombre: 'Nicol',
      apellido: 'Santorini',
      sexo: 'Femenino',
      salario: 5146.03,
    },
  ];
  filteredData: Empleado[] = [];
  sexo: string = 'Todos';

  getTotalEmployes = () => this.listEmpleado.length;
  getTotalMasculino = () =>
    this.listEmpleado.filter((x) => x.sexo == 'Masculino').length;
  getTotalFemenino = () =>
    this.listEmpleado.filter((x) => x.sexo == 'Femenino').length;

  getFilteredData = () =>
    this.sexo == 'Todos'
      ? this.listEmpleado
      : this.listEmpleado.filter((x) => x.sexo == this.sexo);
}
