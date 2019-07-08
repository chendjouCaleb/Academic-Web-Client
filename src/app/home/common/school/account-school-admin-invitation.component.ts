import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountRepository } from 'src/models/persistence/account.repository';
import { SchoolAdminInvitation } from 'src/models/entity/school.entity';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AppConfirm } from 'src/common/confirm/confirm';
import { AlertEmitter } from 'src/common/alert.emitter';
import { Router } from '@angular/router';

@Component({
    templateUrl: "account-school-admin-invitation.component.html",
    selector: "app-account-school-admin"
})
/**
 * Vue d'une demande d'administration pour le récepteur de la demande.
 */
export class AccountSchoolAdminInvitationComponent implements OnInit {

    @Input()
    invitation: SchoolAdminInvitation;

    @Output()
    reject = new EventEmitter<SchoolAdminInvitation>();

    @Output()
    accept = new EventEmitter<SchoolAdminInvitation>();

    constructor(private _schoolRepository: SchoolRepository, private _confirm: AppConfirm,
        private _alert: AlertEmitter, private _router: Router) { }

    ngOnInit(): void {

    }



    tryReject() {
        this._confirm
            .confirm("Vous refusez de devenir le nouvel administrateur de l'établissement?")
            .accept.subscribe(() => {
                this._schoolRepository.rejectAdminInvitation(this.invitation.id).subscribe(() => {
                    this.reject.emit(this.invitation);
                    this._alert.info("Vous avez refusé la demande!");
                }, error => this._alert.error(error.error.message))
            });
    }

    tryAccept() {
        this._confirm
            .confirm(`En acceptant cette demande, vous devez le nouvel administrateur 
            de l'établissement ${this.invitation.school.name}. Voulez continuer ?`)
            .accept.subscribe(() => {
                this._schoolRepository.acceptAdminInvitation(this.invitation.id).subscribe(() => {
                    this.accept.emit(this.invitation);
                    this._router.navigateByUrl(`/schools/${this.invitation.school.id}/settings`);
                    this._alert.info("Vous avez accepté la demande. Vous êtes à présent"
                        + " l'administrateur de cet établissement.");
                }, error => this._alert.error(error.error.message))
            });
    }


}