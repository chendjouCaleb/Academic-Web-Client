import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {AddSchoolForm} from "../school.form";
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AlertEmitter } from 'src/common/alert.emitter';
import { Router } from '@angular/router';

@Component({
  templateUrl: "school-add.component.html"
})
export class SchoolAddComponent {
  form: AddSchoolForm;

  constructor(public dialogRef: MatDialogRef<SchoolAddComponent>, private _repository: SchoolRepository, 
    private _alert: AlertEmitter, private _router: Router) {
    this.form = new AddSchoolForm();
    this.form.doValidation();
  }

  addSchool() {
    this.form.doValidation();

    if(this.form.valid) {
      const school = this.form.getModel();
      this._repository.add(school).subscribe(school => {
        this._alert.success(`L'établissement ${school.name} a été crée!`);
        this._router.navigateByUrl(`/schools/${school.id}/home`)
        this.dialogRef.close();
      }, error => this._alert.error(error.error.message));
    }
  }


}
