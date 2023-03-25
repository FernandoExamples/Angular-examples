import { Component, EventEmitter, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  categorias: Categoria[] = [
    {
      value: 'general',
      nombre: 'General',
    },
    {
      value: 'business',
      nombre: 'Negocios',
    },
  ];

  paises: Pais[] = [
    {
      value: 'ar',
      nombre: 'Argentina',
    },
    {
      value: 'br',
      nombre: 'Brazil',
    },
    {
      value: 'mx',
      nombre: 'Mexico',
    },
  ];

  categoria = 'general';
  pais = 'mx';
  @Output() onChangeSelect = new EventEmitter<{
    categoria: string;
    pais: string;
  }>();

  buscarNoticia() {
    this.onChangeSelect.emit({ categoria: this.categoria, pais: this.pais });
  }
}
