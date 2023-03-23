import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css'],
})
export class ListarGastoComponent implements OnDestroy, OnInit {
  suscription: Subscription;
  presupuesto: number = 0;
  restante: number = 0;
  gastos: any[] = [];

  constructor(private presupuestoService: PresupuestoService) {
    this.suscription = presupuestoService.gastos.subscribe((data) => {
      this.gastos.push(data);
      this.restante = this.restante - data.cantidad;
    });
  }

  ngOnInit(): void {
    this.presupuesto = this.presupuestoService.presupuesto;
    this.restante = this.presupuestoService.restante;
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  getRestanteClass() {
    if (this.presupuesto / 4 > this.restante) return 'alert alert-danger';
    if (this.presupuesto / 2 > this.restante) return 'alert alert-warning';

    return 'alert alert-secondary';
  }
}
