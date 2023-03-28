import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { EmpleadoService } from 'src/app/core/services/empleado.service';
import { Empleado } from '../../../../core/models/empleado';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class CrearComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly empleadoService: EmpleadoService,
    private snackBar: MatSnackBar
  ) {
    this.form = fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });

    console.log(this.form);
    console.log(this.form.get('nombre'));
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
    this.empleadoService.addEmpleado(empleado);
    this.form.reset();
    Object.keys(this.form.value).forEach((x) =>
      this.form.get(x)?.setErrors(null)
    );

    this.snackBar.open('Empleado agregado correctamente', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  hasError(property: string, errorcode: string) {
    return (
      this.form.get(property)?.hasError(errorcode) &&
      this.form.get(property)?.touched
    );
  }
}
