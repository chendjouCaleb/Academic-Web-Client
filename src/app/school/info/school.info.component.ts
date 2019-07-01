import { Component, Input, OnInit } from "@angular/core";
import { School } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { NameForm, DescriptionForm, WebsiteForm, AcronymForm, AddressForm } from 'src/common/common-form';
import { CurrentItems } from 'src/app/current-items';

@Component({
  selector: "app-school-info",
  templateUrl: "school.info.component.html"
})
export class SchoolInfoComponent implements OnInit {
  @Input()
  school: School;


  constructor(private _repository: SchoolRepository, private _items: CurrentItems, private alertEmitter: AlertEmitter) {
 
  }

  ngOnInit(): void {
  }

}
