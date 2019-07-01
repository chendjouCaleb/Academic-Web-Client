import { Component } from '@angular/core';
import { School } from 'src/models/entity/school.entity';
import { CurrentItems } from 'src/app/current-items';

@Component({
    templateUrl: "school-settings.component.html"
})
export class SchoolSettingsComponent{
    school: School;

    constructor(private _items: CurrentItems) {
        this.school = this._items.find<School>("school");
    }
}