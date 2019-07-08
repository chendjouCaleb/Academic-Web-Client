import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountRepository } from 'src/models/persistence/account.repository';
import { SchoolAdminInvitation } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { AppConfirm } from 'src/common/confirm/confirm';
import { SchoolRepository } from 'src/models/persistence/school.repository';

@Component({
    templateUrl: "admin-invitation-item.html",
    selector: "app-school-admin"
})
export class SchoolAdminInvitationComponent implements OnInit {

    @Input()
    invitation: SchoolAdminInvitation;

    @Output()
    delete = new EventEmitter<SchoolAdminInvitation>();
    

    constructor(private _accountRepository: AccountRepository, private _schoolRepository: SchoolRepository,
        private _alert: AlertEmitter,
        private _confirm: AppConfirm) {

    }

    ngOnInit(): void {
        this._accountRepository.findById(this.invitation.accountId).subscribe(account => {
            this.invitation.account = account;
        })
    }

    tryDelete() {
        this._confirm.confirm("Voulez vous annuler la demande d'administration ?")
            .accept.subscribe(() => {
                this._schoolRepository.deleteAdminInvitation(this.invitation.id).subscribe(() => {
                    this._alert.info("La demande a été annulée");
                    this.delete.emit(this.invitation);
                }, error => this._alert.error(error.error.message));
            });
    }

}