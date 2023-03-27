import { Component } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class CrearComponent {}
