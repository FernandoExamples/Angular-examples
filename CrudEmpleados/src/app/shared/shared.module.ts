import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';

@NgModule({
  declarations: [ConfirmacionComponent],
  imports: [CommonModule],
  exports: [ConfirmacionComponent],
})
export class SharedModule {}
