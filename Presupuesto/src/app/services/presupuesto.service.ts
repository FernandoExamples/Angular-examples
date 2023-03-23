import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type Gasto = { nombre: string; cantidad: number };

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  presupuesto: number = 0;
  restante: number = 0;
  private gastos$ = new Subject<Gasto>();

  constructor() {}

  agregarGasto(gasto: Gasto) {
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  get gastos() {
    return this.gastos$.asObservable();
  }
}
