import { EvFormControl, EvFormGroup } from "../../common/form/forms";
import { AddSchoolModel, SchoolInfo } from "../../models/entity/school.entity";

export class AddSchoolForm extends EvFormGroup<AddSchoolModel> {
  constructor() {
    super({
      name: new EvFormControl("name", ""),
      acronym: new EvFormControl("acronym", ""),
      isPublic: new EvFormControl("isPublic", ""),
      university: new EvFormControl("university", ""),
    });

  }

  getModel(): AddSchoolModel {
    const model = new AddSchoolModel();
    model.name = this.controls.name.value;
    model.acronym = this.controls.acronym.value;
    model.isPublic = this.controls.isPublic.value;
    model.university = this.controls.university.value;
    return model;
  }
}

export class SchoolInfoForm extends EvFormGroup<SchoolInfo> {
  constructor(info: SchoolInfo) {
    super({
      name: new EvFormControl("name", info.name),
      university: new EvFormControl("university", info.university),
      acronym: new EvFormControl("acronym", info.acronym),
      description: new EvFormControl("description", info.description),
      creationDate: new EvFormControl("creationDate", info.creationDate),
      isPublic: new EvFormControl("isPublic", info.isPublic),
      website: new EvFormControl("website", info.website),
    });

  }

  getModel(): SchoolInfo {
    const model = new SchoolInfo();
    model.name = this.controls.name.value;
    model.acronym = this.controls.acronym.value;
    model.description = this.controls.description.value;
    model.creationDate = this.controls.creationDate.value;
    model.isPublic = this.controls.isPublic.value;
    model.website = this.controls.website.value;
    model.university = this.controls.university.value;
    return model;
  }
}


