import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/empleado';
import { EmpleadoService } from 'src/app/core/services/empleado.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly empleadoService: EmpleadoService,
    private readonly snackBar: MatSnackBar,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.form = fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const empleado = this.empleadoService.getEmpleado(id);
    this.form.setValue({
      nombre: empleado?.nombre,
      correo: empleado?.correo,
      fechaIngreso: empleado?.fechaIngreso,
      telefono: empleado?.telefono,
      estadoCivil: empleado?.estadoCivil.toLocaleLowerCase(),
      sexo: empleado?.sexo.toLowerCase(),
    });
  }

  guardarEmpleado() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { nombre, correo, fechaIngreso, telefono, estadoCivil, sexo } =
      this.form.value;

    const empleado: Empleado = {
      nombre,
      correo,
      fechaIngreso,
      telefono,
      estadoCivil,
      sexo,
    };
    this.empleadoService.editEmpleado(
      this.route.snapshot.params['id'],
      empleado
    );
    this.form.reset();
    this.router.navigate(['/']);
  }

  hasError(property: string, errorcode: string) {
    return (
      this.form.get(property)?.hasError(errorcode) &&
      this.form.get(property)?.touched
    );
  }
}
