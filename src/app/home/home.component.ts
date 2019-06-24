import { Component } from '@angular/core';
import { Account } from 'src/models/entity/account.entity';
import { ConnectionService } from '../identity/connection-service';

@Component({
    templateUrl: "home.component.html"
})
export class HomeComponent {
    account: Account;

    constructor(private _auth: ConnectionService) {
        this.account = _auth.account;
    }
}