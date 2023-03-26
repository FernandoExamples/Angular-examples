import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuario: any = {}
  isLoading = false;

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(Number(id)).subscribe((data) => {
      console.log(data);
      this.usuario = data
    });
  }
}
