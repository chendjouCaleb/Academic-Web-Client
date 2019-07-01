import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {List} from "@everest/collections";

export const SERVER_URL = "http://localhost:5300/api";

@Injectable()
export abstract class Repository<T, TID> {

  constructor(protected httpClient: HttpClient) {
  }

  abstract get url(): string;

  abstract createFromAny(value: any): T;

  findById(id: TID): Observable<T> {
    return this.httpClient.get<T>(this.url + "/" + id).pipe(map(value => this.createFromAny(value)));
  }

  list(queryParams?: any): Observable<List<T>> {
    return this.httpClient.get<any>(this.url, {params: queryParams})
      .pipe(
        map(values => {
          const list = new List<T>();
          values.forEach(v => list.add(this.createFromAny(v)));
          return list;
        })
      );
  }

  add(model: any, queryParams?: any): Observable<T> {
    return this.httpClient.post<T>(this.url, model, {params: queryParams})
      .pipe(map(value => this.createFromAny(value)));
  }

  update(id: TID, model: any, queryParams?: any): Observable<T> {
    return this.httpClient.post<T>(this.url + "/" + id, model, {params: queryParams})
      .pipe(map(value => this.createFromAny(value)));
  }

  delete(id: TID) {
    return this.httpClient.delete(this.url + "/" + id);
  }
}
