import {Component, Input} from "@angular/core";
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { School, SchoolEmail } from 'src/models/entity/school.entity';
import { EmailForm } from 'src/common/common-form';
import { AlertEmitter } from 'src/common/alert.emitter';
import { MatDialog } from '@angular/material';
import { SchoolEmailDeleteComponent } from './school-email-delete.component';

@Component({
  selector: "app-school-email",
  templateUrl: "school.email.component.html"
})
export class SchoolEmailComponent {

  @Input()
  school: School;

  emailForm = new EmailForm();
  constructor(private _repository: SchoolRepository, private alertEmitter: AlertEmitter,
    private dialog: MatDialog) {}

  addEmail() {
    this.emailForm.doValidation();
    if(this.emailForm.invalid){
      return;
    }
    const email = this.emailForm.getModel();
    this._repository.addEmail(this.school.id, email.email).subscribe(schoolEmail => {
      this.school.emails.insert(0, schoolEmail);
      this.alertEmitter.info("L'adresse électronique a été ajoutée.");
      this.emailForm = new EmailForm();
    }, error => this.alertEmitter.error(error.error.message));
  }

  

  removeEmail(email: SchoolEmail) {
    this.dialog.open(SchoolEmailDeleteComponent, { data: {
      school: this.school,
      email: email
    }})
  }
}
