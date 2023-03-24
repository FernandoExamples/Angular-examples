import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = '949d6076c98e1d9ced6df5c088a724e1a66b71ce';
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(request);
  }
}
