import { Component } from '@angular/core';
import { School } from 'src/models/entity/school.entity';
import { CurrentItems } from 'src/app/current-items';
import { MatDialog } from '@angular/material';
import { SendAdminInvitationComponent } from '../admin/send-invitation.component';

@Component({
    templateUrl: "school-settings.component.html"
})
export class SchoolSettingsComponent{
    school: School;

    constructor(private _items: CurrentItems, private _matDialog: MatDialog) {
        this.school = this._items.find<School>("school");
    }

    openSendAdminInvitation() {
        this._matDialog.open(SendAdminInvitationComponent, 
            {disableClose: true, data: {school: this.school}})
    }
}