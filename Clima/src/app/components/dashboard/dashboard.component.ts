import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  isLoading = false;
  clima = {
    temperatura: '',
    humedad: '',
    clima: '',
  };
  error = '';

  constructor(private climaService: ClimaService) {}

  obtenerClima() {
    this.isLoading = true;
    this.error = '';

    this.climaService.getClima(this.ciudad).subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading = false;
        this.clima = {
          temperatura: data.main.temp,
          humedad: data.main.humidity,
          clima: data.weather[0].description,
        };
      },
      error: () => {
        this.error = 'No hay resultados';
        this.isLoading = false;
      },
    });
  }
}
