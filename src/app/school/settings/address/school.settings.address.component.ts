import {Component, Input, OnInit} from "@angular/core";
import { AddressForm } from 'src/common/common-form';
import { School } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { SchoolRepository } from 'src/models/persistence/school.repository';

@Component({
  selector: "app-school-settings-address",
  templateUrl: "school.settings.address.component.html"
})
export class SchoolSettingsAddressComponent implements OnInit {
  form: AddressForm;

  @Input()
  school: School;

  constructor(private _repository: SchoolRepository, private alertEmitter: AlertEmitter) { }

  ngOnInit(): void {

    this.form = new AddressForm(this.school.getAddress());
  }

  updateAddress() {
    this._repository.editAddress(this.school.id, this.form.getModel()).subscribe(() => {
      this.alertEmitter.info("L'adresse a été mise à jour");
    }, error => {
      {
        if (error.error.fieldErrors) {
          this.form.addMessageErrors(error.error.fieldErrors);
        }
        this.alertEmitter.error(error.error.message);
      }
    });
  }

  reset(){
    this.form = new AddressForm(this.school.getAddress());
  }
}
