import { Component } from '@angular/core';
import { Noticia } from './models/Noticia';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Noticias';
  noticias: Noticia[] = [];
  isLoading = false

  constructor(private noticiaService: NoticiaService) {}

  buscarNoticias(categoria: string, pais: string) {
    this.isLoading = true
    this.noticiaService.getNoticias(categoria, pais).subscribe((data) => {
      this.noticias = data;
      console.log(data);
      this.isLoading = false
    });
  }
}
