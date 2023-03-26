import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  isLoading = false;

  constructor(private readonly usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.isLoading = true;
    this.usuarioService.getUsuarios().subscribe((data) => {
      console.log(data);
      this.isLoading = false;
      this.usuarios = data;
    });
  }
}
