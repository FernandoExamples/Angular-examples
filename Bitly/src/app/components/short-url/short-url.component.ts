import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent {
  nombreUrl: string = '';
  shortUrl: string = '';
  isLoading: boolean = false;
  error: string = '';

  constructor(private shortUrlService: ShortUrlService) {}

  obtenerUrl() {
    if (!this.nombreUrl) {
      this.error = 'Ingresa una URL';
      return;
    }
    this.isLoading = true;
    this.error = '';
    this.shortUrlService.getUrl(this.nombreUrl).subscribe({
      next: (data) => {
        this.shortUrl = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = 'URL inválida';
      },
    });
  }
}
