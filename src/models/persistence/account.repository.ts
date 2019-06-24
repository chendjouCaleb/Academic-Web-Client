import { Account } from "../entity/account.entity";
import { Repository, SERVER_URL } from "./repository";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

export class AccountRepository extends Repository<Account, string> {
    createFromAny(value: any): Account {
        return Account.createFromAny(value);
    }
    url: string = SERVER_URL + "/accounts";

    findByEmail(email: string): Observable<Account> {
        return this.httpClient.get(this.url + "/find/email", {params: { email: email}})
            .pipe(map(value => this.createFromAny(value)));
    }

    findByUsername(username: string): Observable<Account> {
        return this.httpClient.get(this.url + "/find", {params: { username: username}})
            .pipe(map(value => this.createFromAny(value)));
    }

    findByPhoneNumber(phoneNumber: string): Observable<Account> {
        return this.httpClient.get(this.url + "/find", {params: { phoneNumber: phoneNumber}})
            .pipe(map(value => this.createFromAny(value)));
    }

    updateEmail(accountId: string, email: string): Observable<any> {
        return this.httpClient.put(`${this.url}/${accountId}/email`, {}, {params: { email: email}});
    }

    updateUsername(accountId: string, username: string): Observable<any> {
        return this.httpClient.put(`${this.url}/${accountId}/username`, {}, {params: { username: username}});
    }

    updatePhoneNumber(accountId: string, phoneNumber: string): Observable<any> {
        return this.httpClient.put(`${this.url}/${accountId}/phoneNumber`, {}, {params: { phoneNumber: phoneNumber}});
    }


    checkPassword(accountId: string, password: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const body = "password="+ password;
        return this.httpClient.post(`${this.url}/${accountId}/password/check`, body,  {headers: headers});
    }

    //todo image download and upload.

}