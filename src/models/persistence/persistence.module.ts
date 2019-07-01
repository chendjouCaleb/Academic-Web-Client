import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AccountRepository } from "./account.repository";
import { ConnectionRepository } from "./connection.repository";
import { ClientRepository } from "./client.repository";
import { AuthorizationRepository } from "./authorization.repository";
import {SchoolRepository} from "./school.repository";

@NgModule({
    imports: [  ],
    providers: [ AccountRepository , ConnectionRepository, ClientRepository, AuthorizationRepository,
    SchoolRepository]
})
export class PersistenceModule {

}
