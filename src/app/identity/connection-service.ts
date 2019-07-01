import { Repository } from "src/models/persistence/repository";
import { Connection, AddConnectionModel } from "src/models/entity/connection.entity";
import { environment } from "src/environments/environment";
import { Account } from 'src/models/entity/account.entity';
import { ClaimType } from "../../common/claim-type";

import * as jwt_decode from 'jwt-decode';

export class ConnectionService extends Repository<Connection, number>{
    url: string = environment.SERVER_URL + "/connections";
    public static CONNECTION_TOKEN_PARAM = "Connection_Token";

    account: Account;
    isAthenticated = false;

    get accessToken() {
        return localStorage.getItem(ConnectionService.CONNECTION_TOKEN_PARAM);
    }

    createFromAny(value: any): Connection {
        return Connection.createFromAny(value);
    }

    async connect(model: AddConnectionModel):Promise<Account> {

        const token = await this.httpClient.post<string>(this.url, model).toPromise();
        console.log(token);
        localStorage.setItem(ConnectionService.CONNECTION_TOKEN_PARAM, token);
        this.account = this.decodeToken(token);
        this.isAthenticated = true;

        return this.account;
    }

    logout() {
        localStorage.removeItem(ConnectionService.CONNECTION_TOKEN_PARAM);
        this.account = null;
        this.isAthenticated = false;
    }

    init() {
        const token = localStorage.getItem(ConnectionService.CONNECTION_TOKEN_PARAM);
        if(token) {
            
            this.account = this.decodeToken(token);
            this.isAthenticated = true;
            console.log(this.account)
        }
    }


    decodeToken(token: string): Account {
        const account = new Account();
        const decoded = jwt_decode<Account>(token);
        account.name = decoded[ClaimType.Name];
        account.surname = decoded[ClaimType.Surname];
        account.email = decoded[ClaimType.Email];
        account.id = decoded[ClaimType.NameIdentifier];
        return account;
    }

}