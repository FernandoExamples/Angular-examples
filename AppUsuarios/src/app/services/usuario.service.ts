import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  token = 'b6e821e9e955edf2d2dd49f5e84451af5ea3b13526092bcbbc4cbb179b88be32';

  constructor(private readonly httpClient: HttpClient) {}

  getUsuarios() {
    return this.httpClient.get<any>(
      `https://gorest.co.in/public/v2/users?access-token=${this.token}`
    );
  }

  getUsuario(id: number) {
    return this.httpClient.get<any>(
      `https://gorest.co.in/public/v2/users/${id}?access-token=${this.token}`
    );
  }
}
