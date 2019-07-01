import { Component, Input } from '@angular/core';
import { School } from 'src/models/entity/school.entity';

@Component({
    templateUrl: "school-banner.component.html",
    selector: "app-school-banner"
})
export class SchoolBannerComponent {
    @Input()
    school: School;
}