import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  baseurl = 'http://localhost:3000';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'SUPERRAREPOKEMON',
      },
    });
    return next.handle(requestClone);
  }
}
