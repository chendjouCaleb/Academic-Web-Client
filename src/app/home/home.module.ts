import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from 'src/common/common.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [ BrowserModule, CommonsModule],
    declarations: [ HomeComponent ]
})
export class HomeModule {

}