import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from 'src/common/common.module';
import { MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { PersistenceModule } from 'src/models/persistence/persistence.module';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './connection-service';
import { IsAuthenticatedGuard, IsNotAuthenticatedGuard } from './authentication.guard';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [IsNotAuthenticatedGuard] },
    { path: "logout", component: LogoutComponent, canActivate: [IsAuthenticatedGuard] }
]

@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule, RouterModule.forChild(routes), PersistenceModule, 
        CommonsModule, MatInputModule, MatButtonModule, MatCheckboxModule ],
    declarations: [ LoginComponent, LogoutComponent ],
    providers: [ConnectionService, IsAuthenticatedGuard, IsNotAuthenticatedGuard]
})
export class IdentityModule {

}