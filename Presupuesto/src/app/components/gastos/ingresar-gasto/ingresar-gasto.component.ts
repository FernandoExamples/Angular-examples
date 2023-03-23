import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css'],
})
export class IngresarGastoComponent {
  nombreGasto: string = '';
  cantidad: number = 0;

  constructor(private presupuestoService: PresupuestoService) {}

  get restante() {
    return this.presupuestoService.restante;
  }

  agregarPresupuesto(gastoForm: NgForm) {
    if (this.cantidad <= 0 || !this.nombreGasto) return;
    const gasto = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad,
    };
    this.presupuestoService.agregarGasto(gasto);

    gastoForm.resetForm();
    this.nombreGasto = '';
    this.cantidad = 0;
  }
}
