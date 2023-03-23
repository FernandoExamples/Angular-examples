import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css'],
})
export class IngresarPresupuestoComponent {
  cantidad: number = 0;
  cantidadIncorrecta: boolean = false;

  constructor(
    private presupuestoService: PresupuestoService,
    private router: Router
  ) {}

  agregar() {
    if (this.cantidad <= 0) return (this.cantidadIncorrecta = true);
    this.cantidadIncorrecta = false;

    this.presupuestoService.presupuesto = this.cantidad;
    this.presupuestoService.restante = this.cantidad;
    this.router.navigate(['/gastos']);

    return;
  }
}
