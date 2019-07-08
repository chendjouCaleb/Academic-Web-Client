import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Account } from 'src/models/entity/account.entity';
import { AccountRepository } from 'src/models/persistence/account.repository';
import { ConnectionService } from 'src/app/identity/connection-service';
import { PasswordForm } from '../common-form';
import { AlertEmitter } from '../alert.emitter';

@Component({
    templateUrl: "confirm-password-dialog.component.html"
})
export class ConfirmPasswordDialogComponent {
    message: string;
    form = new PasswordForm();
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private _alert: AlertEmitter,
        private _repository: AccountRepository, private _auth: ConnectionService,
        private matDialogRef: MatDialogRef<ConfirmPasswordDialogComponent>) {
        this.message = dialogData.message;
    }

    cancel() {
        this.matDialogRef.close();
    }

    check() {
        this._repository.checkPassword(this._auth.account.id, this.form.getValue())

            .subscribe(result => {
                if (result) {
                    this.matDialogRef.close(true);
                } else {
                    this.form.getControl("password").addError("Mot de passe incorrect");
                }
            })
    }

}