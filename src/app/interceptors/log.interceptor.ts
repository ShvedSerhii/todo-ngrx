import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('***INTERCEPTOR*** [REQUEST]: ' + JSON.stringify(req));

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('***INTERCEPTOR*** [RESPONSE]: ' + JSON.stringify(event));
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            console.log('***INTERCEPTOR*** [ERROR]: ' + JSON.stringify(err));
          }
        }
      )
    );
  }
}
