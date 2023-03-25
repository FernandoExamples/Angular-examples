import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Noticia } from '../models/Noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  key = '6fab2c071a82475b8bb878214869fac8';

  constructor(private httpClient: HttpClient) {}

  getNoticias(categoria: string, pais: string): Observable<Noticia[]> {
    return this.httpClient
      .get<any>(
        `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${this.key}`
      )
      .pipe(map((x) => x.articles));
  }
}
