import {Component, Input} from "@angular/core";
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { School, SchoolPhone } from 'src/models/entity/school.entity';
import { PhoneForm } from 'src/common/common-form';
import { AlertEmitter } from 'src/common/alert.emitter';
import { MatDialog } from '@angular/material';
import { SchoolPhoneDeleteComponent } from './school-phone-delete.component';

@Component({
  selector: "app-school-phone",
  templateUrl: "school.phone.component.html"
})
export class SchoolPhoneComponent {

  @Input()
  school: School;

  phoneForm = new PhoneForm();
  constructor(private _repository: SchoolRepository, private alertEmitter: AlertEmitter,
    private dialog: MatDialog) {}

  addPhone() {
    this.phoneForm.doValidation();
    if(this.phoneForm.invalid){
      return;
    }
    const phone = this.phoneForm.getModel();
    this._repository.addPhone(this.school.id, phone.phone).subscribe(schoolPhone => {
      this.school.phones.insert(0, schoolPhone);
      this.alertEmitter.info("Le numéro de téléphone a été ajoutée.");
      this.phoneForm = new PhoneForm();
    }, error => this.alertEmitter.error(error.error.message));
  }

  

  removePhone(phone: SchoolPhone) {
    this.dialog.open(SchoolPhoneDeleteComponent, { data: {
      school: this.school,
      phone: phone
    }})
  }
}
