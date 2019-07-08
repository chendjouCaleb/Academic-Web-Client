import { Component } from '@angular/core';
import { Account } from 'src/models/entity/account.entity';
import { ConnectionService } from '../identity/connection-service';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { List } from '@everest/collections';
import { SchoolAdminInvitation } from 'src/models/entity/school.entity';
import { AppConfirm } from 'src/common/confirm/confirm';

@Component({
    templateUrl: "home.component.html"
})
export class HomeComponent {
    account: Account;

    schoolAdminInvitations = new List<SchoolAdminInvitation>();

    constructor(private _auth: ConnectionService, private confirm: AppConfirm,
        private _schoolRepository: SchoolRepository) {
        this.account = _auth.account;

        this._schoolRepository.getAdminInvitationsByAccount(this.account.id).subscribe(items => {
            this.schoolAdminInvitations = items;
        });
    }
}