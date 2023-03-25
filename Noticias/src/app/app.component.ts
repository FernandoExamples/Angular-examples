import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Noticias';

  constructor(private noticiaService: NoticiaService) {}

  buscarNoticias(categoria: string, pais: string) {
    this.noticiaService.getNoticias(categoria, pais).subscribe((data) => {
      console.log(data);
    });
  }
}
