import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ConnectionService } from './connection-service';

@Injectable()
export class HttpAccessTokenInterceptor implements HttpInterceptor {

    constructor(private authorizer: ConnectionService ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authorizer.accessToken){
            const headers = request.headers.set("Authorization", "Bearer " + this.authorizer.accessToken);
            request = request.clone({
                headers: headers
            });
        }
      return next.handle(request);
    }
}