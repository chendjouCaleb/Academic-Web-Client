import { School } from 'src/models/entity/school.entity';
import { EmailForm } from 'src/common/common-form';
import { AccountRepository } from 'src/models/persistence/account.repository';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertEmitter } from 'src/common/alert.emitter';
import { Account } from 'src/models/entity/account.entity';
import { Inject, Component } from '@angular/core';

@Component({
    templateUrl: "send-invitation.component.html"
})
export class SendAdminInvitationComponent {
    school: School;

    emailForm = new EmailForm();
    account: Account;

    constructor(public dialog: MatDialogRef<SendAdminInvitationComponent>, private accountAPI: AccountRepository,
        private alertEmitter: AlertEmitter, private _schoolRepository: SchoolRepository,
        @Inject(MAT_DIALOG_DATA) private  dialogData) {
            this.school = this.dialogData.school;
    }

    send() {
        this._schoolRepository.sendAdminInvitation(this.school.id, this.account.id).subscribe(invitation => {
            this.alertEmitter.info("L'invitation a été envoyée.");
            this.school.adminInvitations.add(invitation);
            this.dialog.close();
        }, error => this.alertEmitter.error(error.error.message));
    }

    findAccount() {
        this.accountAPI.findByEmail(this.emailForm.getModel().email).subscribe(account => {
            if(!account){
                this.alertEmitter.error("Aucun trouvé pour l'email renseigné")
            }
            if (!account.imageURL) {
                account.imageURL = "assets/default-account.png";
            }
            this.account = account;
        }, error => this.alertEmitter.error(error.error.message));
    }
}