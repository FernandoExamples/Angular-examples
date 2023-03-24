import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  baseUrl = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private httpclient: HttpClient) {}

  getUrl(url: string): Observable<string> {
    return this.httpclient
      .post(this.baseUrl, {
        long_url: url,
      })
      .pipe(map<any, string>((value) => value.link))
      .pipe(
        catchError((error: HttpErrorResponse) =>
          throwError(() => new Error(error.message))
        )
      );
  }
}
