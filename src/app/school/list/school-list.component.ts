import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";
import {SchoolAddComponent} from "../add/school-add.component";
import { List } from '@everest/collections';
import { School } from 'src/models/entity/school.entity';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/models/persistence/repository';

@Component({
  templateUrl: "school-list.component.html"
})
export class SchoolListComponent {
  schools = new List<School>();
  
  constructor(private matDialog: MatDialog, private _repository: SchoolRepository, private _http: HttpClient) {
    //_repository.list().subscribe(schools => this.schools = schools );
    _http.get<List<School>>(SERVER_URL + "/schools").subscribe(schools => this.schools = schools );
  }

  openAddDialog() {
    this.matDialog.open(SchoolAddComponent, {disableClose: true});
  }
}
