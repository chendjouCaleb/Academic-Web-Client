import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ConnectionService } from './connection-service';

@Injectable()
export class HttpAccessTokenInterceptor implements HttpInterceptor {

    constructor(private authorizer: ConnectionService ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            headers: new HttpHeaders({
                "Authorization": "Bearer " + this.authorizer.accessToken
            })
        });
      return next.handle(request);
    }
}