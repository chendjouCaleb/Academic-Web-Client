import { Component, Inject } from '@angular/core';
import { ConnectionService } from './identity/connection-service';
import { Router } from "@angular/router";
import { HttpAccessTokenInterceptor } from './identity/access-token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = ['heic0515a.jpg', 'heic1110a.jpg', 'heic1118a.jpg', 'heic1302a.jpg', 'heic1307a.jpg', 'iss034e0152541.jpg', 'iss034e0239561.jpg', 
  'iss034e0258571.jpg', 'iss034e0305141.jpg', 'iss034e0306351.jpg', 'potw1345a.jpg' ]
  
  image = "";
  constructor(private _auth: ConnectionService, private _router: Router, @Inject(HTTP_INTERCEPTORS) private interceptor: HttpAccessTokenInterceptor) {
    const i = Math.floor(Math.random() * this.images.length - 1) + 1  
    this.image =  'url(assets/background/' + this.images[i] + ')';

    this._auth.init();

    console.log(interceptor)
  }
}
