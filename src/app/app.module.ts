import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {AccountModule} from "./account/account.module";
import {PersistenceModule} from "src/models/persistence/persistence.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IdentityModule} from "./identity/identity-module";
import {HomeModule} from "./home/home.module";
import {LayoutModule} from "./layout/layout.module";
import {SchoolModule} from "./school/school.module";
import { CurrentItems } from './current-items';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpAccessTokenInterceptor } from './identity/access-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule, AccountModule, PersistenceModule, BrowserAnimationsModule,
    AppRoutingModule, IdentityModule, HomeModule, SchoolModule,  HttpClientModule
  ],
  providers: [CurrentItems, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAccessTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
