import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: "confirm-dialog.component.html"
})
export class ConfirmDialogComponent {
    message: string;
    constructor( @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private matDialogRef: MatDialogRef<ConfirmDialogComponent>) {
        this.message = dialogData.message;
    }

    reject() {
        this.matDialogRef.close();
    }

    accept(){
        this.matDialogRef.close(true);
    }

}