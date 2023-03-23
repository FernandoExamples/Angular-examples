import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private key = '8b84e2b903ec6ebde9e5bb5e4bc3b6f7';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${ciudad}&appid=${this.key}`);
  }
}
