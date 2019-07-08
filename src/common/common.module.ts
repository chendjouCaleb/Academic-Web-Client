import { NgModule } from '@angular/core';
import { AlertEmitter } from './alert.emitter';
import { CommonModule } from '@angular/common';
import { ControlErrorComponent } from './form/control.error.component';
import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ConfirmDialogComponent } from './confirm/confirm-dialog.component';
import { AppConfirm } from './confirm/confirm';
import { StateBadgeDirective } from './state-badge.directive';
import { ConfirmPasswordDialogComponent } from './confirm/confirm-password-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  providers: [AlertEmitter, AppConfirm],
  declarations: [ControlErrorComponent, ConfirmDialogComponent, ConfirmPasswordDialogComponent, StateBadgeDirective],
  exports: [ControlErrorComponent, StateBadgeDirective],
  entryComponents: [ ConfirmDialogComponent, ConfirmPasswordDialogComponent ]

})
export class CommonsModule { }
