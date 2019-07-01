import {Component, Input} from "@angular/core";
import { School } from 'src/models/entity/school.entity';

@Component({
  templateUrl: "school.toolbar.component.html",
  selector: "app-school-toolbar"
})
export class SchoolToolbarComponent {
  @Input()
  school: School;
}
