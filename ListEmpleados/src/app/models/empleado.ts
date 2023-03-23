export class Empleado {
  id: number;
  nombre: string;
  apellido: string;
  salario: number;
  sexo: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    salario: number,
    sexo: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
    this.sexo = sexo;
  }
}
