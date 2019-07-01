import { Component, Inject } from '@angular/core';
import { School, SchoolPhone } from 'src/models/entity/school.entity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AlertEmitter } from 'src/common/alert.emitter';

@Component({
    templateUrl: "school-phone-delete.component.html"
})
export class SchoolPhoneDeleteComponent {
    school: School;
    phone: SchoolPhone;

    constructor(public dialogRef: MatDialogRef<SchoolPhoneDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) dialogData, private _repository: SchoolRepository,
        private alertEmitter: AlertEmitter) {
        this.school = dialogData.school;
        this.phone = dialogData.phone;

    }

    delete() {
        this._repository.deletePhone(this.school.id, this.phone.id).subscribe(() => {
            this.alertEmitter.info("L'adresse électronique a été supprimée!");
            this.dialogRef.close();
            this.school.phones.remove(this.phone);
        }, error => this.alertEmitter.error(error.error.message))
    }
}