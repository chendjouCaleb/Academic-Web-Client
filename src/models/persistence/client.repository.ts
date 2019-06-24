import { Repository, SERVER_URL } from "./repository";
import { Client } from "../entity/client.entity";

export class ClientRepository extends Repository<Client, string> {
    url: string = SERVER_URL + "/clients"    
    
    createFromAny(value: any): Client {
        return Client.createFromAny(value);
    }


}