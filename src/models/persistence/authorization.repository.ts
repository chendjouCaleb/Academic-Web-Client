import { Repository, SERVER_URL } from "./repository";
import { Authorization } from "../entity/authorization.entity";

export class AuthorizationRepository extends Repository<Authorization, string> {
    url: string = SERVER_URL + "/authorizations"    
    
    createFromAny(value: any): Authorization {
        return Authorization.createFromAny(value);
    }
}