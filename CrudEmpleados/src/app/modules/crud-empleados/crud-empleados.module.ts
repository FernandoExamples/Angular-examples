import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudEmpleadosRoutingModule } from './crud-empleados-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditarComponent } from './pages/editar/editar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

@NgModule({
  declarations: [EditarComponent, CrearComponent],
  imports: [
    CommonModule,
    CrudEmpleadosRoutingModule,
    SharedModule,
    AngularMaterialModule,
  ],
})
export class CrudEmpleadosModule {}
