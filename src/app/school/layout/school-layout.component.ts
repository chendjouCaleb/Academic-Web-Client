import { Component, Input } from '@angular/core';
import { School } from 'src/models/entity/school.entity';

@Component({
    templateUrl: "school-layout.component.html",
    selector: "app-school-layout"
})
export class SchoolLayoutComponent {
    @Input()
    school: School

    @Input()
    title: String;
}