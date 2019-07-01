import { Component, Input } from '@angular/core';
import { School } from 'src/models/entity/school.entity';

@Component({
    templateUrl: "school-path.component.html",
    selector: "app-school-path"
})
export class SchoolPathComponent {
    @Input()
    school: School;   
    
    @Input()
    end: string;
}