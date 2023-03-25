import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia'

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {
  @Input() noticias: Noticia[] = []
}
