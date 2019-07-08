import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from 'src/common/common.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { AccountSchoolAdminInvitationComponent } from './common/school/account-school-admin-invitation.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MomentModule} from 'ngx-moment';
 
@NgModule({
    imports: [ BrowserModule, CommonsModule, LayoutModule, RouterModule, MatButtonModule, MomentModule],
    declarations: [ HomeComponent, AccountSchoolAdminInvitationComponent ]
})
export class HomeModule {

}