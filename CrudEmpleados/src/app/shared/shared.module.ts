import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [ConfirmacionComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ConfirmacionComponent],
})
export class SharedModule {}
