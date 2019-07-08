import { Component, Input, OnInit } from "@angular/core";
import { School } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { NameForm, DescriptionForm, WebsiteForm, AcronymForm, AddressForm } from 'src/common/common-form';
import { CurrentItems } from 'src/app/current-items';
import { SchoolInfoForm } from '../../school.form';

@Component({
  selector: "app-school-settings-info",
  templateUrl: "school.settings.info.component.html"
})
export class SchoolSettingsInfoComponent implements OnInit {
  @Input()
  school: School;

  form: SchoolInfoForm;

  maxDate = new Date(Date.now());

  constructor(private _repository: SchoolRepository, private alertEmitter: AlertEmitter) {

  }

  ngOnInit(): void {
    this.form = new SchoolInfoForm(this.school.getInfo());
  }

  update() {
    const info = this.form.getModel();
    this._repository.editInfo(this.school.id, info).subscribe(() => {
      this.school.setInfo(info);
      this.alertEmitter.info("Les informations de l'établissement a été modifié");
    }, error => this.alertEmitter.error(error.error.message));
  }

  reset() {
    this.form = new SchoolInfoForm(this.school.getInfo());
  }

}
