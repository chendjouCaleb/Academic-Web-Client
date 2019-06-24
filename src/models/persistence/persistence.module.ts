import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AccountRepository } from "./account.repository";
import { ConnectionRepository } from "./connection.repository";
import { ClientRepository } from "./client.repository";
import { AuthorizationRepository } from "./authorization.repository";

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ AccountRepository , ConnectionRepository, ClientRepository, AuthorizationRepository ]
})
export class PersistenceModule {

}