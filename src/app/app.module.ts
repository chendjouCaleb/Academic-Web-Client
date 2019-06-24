import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { PersistenceModule } from 'src/models/persistence/persistence.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentityModule } from './identity/identity-module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AccountModule, PersistenceModule, BrowserAnimationsModule,
    AppRoutingModule, IdentityModule, HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
