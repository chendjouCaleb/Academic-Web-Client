import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from 'src/common/common.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports: [ BrowserModule, CommonsModule, LayoutModule],
    declarations: [ HomeComponent ]
})
export class HomeModule {

}