import { EvFormGroup, EvFormControl } from "src/common/form/forms";
import { AddConnectionModel } from "src/models/entity/connection.entity";

export class LoginFormGroup extends EvFormGroup<AddConnectionModel> {
    constructor() {
        super({
            email: new EvFormControl("email", ""),
            password: new EvFormControl("password", ""),
            isPersisted: new EvFormControl("isPersisted", null)
        });

    }

    getModel(): AddConnectionModel {
         const model = new AddConnectionModel();
         model.email = this.controls.email.value;
         model.password = this.controls.password.value;
         model.isPersisted = this.controls.isPersisted.value != null;
         return model;
    }
}
