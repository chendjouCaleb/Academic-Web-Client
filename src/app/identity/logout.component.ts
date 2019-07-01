import { ConnectionService } from './connection-service';
import { AlertEmitter } from 'src/common/alert.emitter';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: "<h2>Déconnexion</h2>"
})
export class LogoutComponent implements OnInit{
    
    constructor(private _auth: ConnectionService, private _alert: AlertEmitter, private _router: Router) {

    }

    ngOnInit(): void {
        this._auth.logout();
        this._alert.info("Vous êtes à présent déconnecté. A bientot!");
        this._router.navigateByUrl("/login");
    }
}