import { Component, Inject } from '@angular/core';
import { School, SchoolEmail } from 'src/models/entity/school.entity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AlertEmitter } from 'src/common/alert.emitter';

@Component({
    templateUrl: "school-email-delete.component.html"
})
export class SchoolEmailDeleteComponent {
    school: School;
    email: SchoolEmail;

    constructor(public dialogRef: MatDialogRef<SchoolEmailDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) dialogData, private _repository: SchoolRepository,
        private alertEmitter: AlertEmitter) {
        this.school = dialogData.school;
        this.email = dialogData.email;

    }

    delete() {
        this._repository.deleteEmail(this.school.id, this.email.id).subscribe(() => {
            this.alertEmitter.info("L'adresse électronique a été supprimée!");
            this.dialogRef.close();
            this.school.emails.remove(this.email);
        }, error => this.alertEmitter.error(error.error.message))
    }
}