import {Component} from "@angular/core";
import { CurrentItems } from 'src/app/current-items';
import { School } from 'src/models/entity/school.entity';

@Component({
  templateUrl: "school-home.component.html"
})
export class SchoolHomeComponent {
  school: School;
  constructor(private _items: CurrentItems) {
    this.school = this._items.find<School>("school");
  }
}
