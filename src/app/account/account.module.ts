import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountAddComponent } from "./add/account-add.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonsModule } from "src/common/common.module";
import { MatInputModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
    { path: "", component: AccountAddComponent },
    { path: "accounts/add", component: AccountAddComponent }
]

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes),
    CommonsModule, MatInputModule, MatButtonModule  ],
    declarations: [ AccountAddComponent ]
})
export class AccountModule {

}