import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {
  imgUrl = 'https://placeimg.com/640/360/people'
  @Input() usuario: any
}
