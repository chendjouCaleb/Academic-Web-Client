import { EvFormGroup, EvFormControl } from "src/common/form/forms";
import { AddConnectionModel } from "src/models/entity/connection.entity";

export class LoginFormGroup extends EvFormGroup<AddConnectionModel> {
    constructor() {
        super({
            email: new EvFormControl("adresse électronique", "email", "",  null),
            password: new EvFormControl("mot de passe", "password", "", null),
            isPersisted: new EvFormControl("maintenir la connexion", "isPersisted", null)
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
