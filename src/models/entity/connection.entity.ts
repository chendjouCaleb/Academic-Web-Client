import { Entity } from "./entity";
import { Account } from "./account.entity";
import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class Connection extends Entity<number> {
    navigator: string;
    remoteAddress: string;
    os: string;
    isPersistent: boolean;
    beginDate: Date;
    endDate: Date;

    account: Account;
    accountId: string;

    get isClosed() {
        return this.endDate != null;
    }

    static createFromAny(value: any) : Connection {
        if(!value) {
            return null;
        }

        const connection = new Connection();

        connection.id = value.id;
        connection.registrationDate = value.registrationDate;

        connection.navigator = value.navigator;
        connection.remoteAddress = value.remoteAddress;
        connection.os = value.os;
        connection.isPersistent = value.isPersistent;
        connection.beginDate = value.beginDate;
        connection.endDate = value.endDate;

        connection.account = Account.createFromAny(value.account);
        connection.accountId = value.accountId;

        return connection;
    }
}


export class AddConnectionModel {

    @IsNotEmpty({message: "Veuillez renseigner votre adresse email"})
    @IsEmail({}, {message: "Addresse email incorrect"})
    email: string;
    isPersisted: boolean;

    @IsNotEmpty({message: "Veuillez renseigner votre mot de passe"})
    @MinLength(6)
    password: string;
}