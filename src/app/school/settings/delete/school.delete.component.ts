import {Component, Inject, Input} from "@angular/core";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { School } from 'src/models/entity/school.entity';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AlertEmitter } from 'src/common/alert.emitter';

@Component({
  templateUrl: "school.delete.component.html"
})
export class SchoolDeleteComponent {
  @Input()
  school: School;
  
  constructor(private _repository: SchoolRepository, private router: Router, private alertEmitter: AlertEmitter,
              private dialog: MatDialogRef<SchoolDeleteComponent>, @Inject(MAT_DIALOG_DATA) private data) {
    this.school = this.data.school;
  }

  deleteSchool() {
    this._repository.delete(this.school.id).subscribe(() => {
      this.alertEmitter.info("L'établissement a été supprimé");
      this.router.navigateByUrl("/schools");
      this.dialog.close();
    }, error => this.alertEmitter.error(error.error.message));
  }

  close() {
    this.dialog.close();
  }
}
