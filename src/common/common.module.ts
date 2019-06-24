import { NgModule } from '@angular/core';
import { AlertEmitter } from './alert.emitter';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { ControlErrorComponent } from './form/control.error.component';

@NgModule({
  imports: [ BrowserModule, CommonModule],
    providers: [ AlertEmitter ],
    declarations: [ ControlErrorComponent],
  exports: [ ControlErrorComponent ]
})
export class CommonsModule {}
