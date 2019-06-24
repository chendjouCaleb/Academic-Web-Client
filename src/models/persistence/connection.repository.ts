import { Repository, SERVER_URL } from "./repository";
import { Connection } from "../entity/connection.entity";
import { Observable } from "rxjs";

export class ConnectionRepository extends Repository<Connection, number> {
    url: string = SERVER_URL + "/connections";
    
    createFromAny(value: any): Connection {
        return Connection.createFromAny(value);
    }


    close(connectionId: number): Observable<any> {
        return this.httpClient.put(`${this.url}/${connectionId}/close`, {});
    }
}