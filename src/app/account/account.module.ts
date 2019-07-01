import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountAddComponent } from "./add/account-add.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonsModule } from "src/common/common.module";
import { MatInputModule, MatButtonModule } from '@angular/material';
import { IsNotAuthenticatedGuard } from '../identity/authentication.guard';

const routes: Routes = [
    { path: "accounts/add", component: AccountAddComponent, canActivate: [ IsNotAuthenticatedGuard ] }
]

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes),
    CommonsModule, MatInputModule, MatButtonModule  ],
    declarations: [ AccountAddComponent ]
})
export class AccountModule {

}