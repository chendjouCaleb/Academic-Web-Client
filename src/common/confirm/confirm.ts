import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Subject } from 'rxjs';
import { ConfirmPasswordDialogComponent } from './confirm-password-dialog.component';

@Injectable()
export class AppConfirm {
    constructor(private matDialog: MatDialog) {

    }

    confirm(message: string): ConfirmResult {
        const result = new ConfirmResult();
        const dialogRef = this.matDialog.open(ConfirmDialogComponent,
            { maxWidth: '450px', data: { message } });

        dialogRef.afterClosed().subscribe(r => {
            if (r) {
                result.accept.next();
            } else {
                result.reject.next();
            }
        })

        return result;
    }


    confirmPassword(message: string): ConfirmResult {
        const result = new ConfirmResult();
        const dialogRef = this.matDialog.open(ConfirmPasswordDialogComponent,
            { maxWidth: '450px', data: { message } });

        dialogRef.afterClosed().subscribe(r => {
            if (r) {
                result.accept.next();
            } else {
                result.reject.next();
            }
        })

        return result;
    }
}

export class ConfirmResult {
    accept = new Subject<any>();
    reject = new Subject<any>();
}