import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { School } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { CurrentItems } from '../current-items';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConnectionService } from '../identity/connection-service';

@Injectable()
export class SchoolDataResolver implements Resolve<School> {
    constructor(private _repository: SchoolRepository, private _items: CurrentItems,
        private _auth: ConnectionService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = +route.paramMap.get("schoolId");
        return this._repository.findById(id).pipe(map(school => {
            console.log(school);
            this._items.put("school", school);
            if (this._auth.isAthenticated && school.admin.member.accountId === this._auth.account.id) {
                school.isAdmin = true;
            }

            if (!school.imageURL) {
                school.imageURL = "assets/background/heic0515a.jpg"
            }

            return school;
        }));
    }

}