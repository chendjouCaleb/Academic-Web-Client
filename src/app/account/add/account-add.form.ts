import { EvFormGroup, EvFormControl } from "src/common/form/forms";
import { AddAccountModel } from "src/models/entity/account.entity";

export class AccountAddFormGroup extends EvFormGroup<AddAccountModel> {
    constructor() {
        super({
            name: new EvFormControl("nom", "name", "", null),
            surname: new EvFormControl("prénom", "surname", "", null),
            email: new EvFormControl("adresse électronique", "email", "",  null),
            password: new EvFormControl("mot de passe", "password", "", null),
            passwordMatcher: new EvFormControl("mot de passe(confirmation", "passwordMatcher", "", null)
        });

    }

    getModel(): AddAccountModel {
         const model = new AddAccountModel();
         model.name = this.controls.name.value;
         model.surname = this.controls.surname.value;
         model.email = this.controls.email.value;
         model.password = this.controls.password.value;
         model.passwordMatcher = this.controls.passwordMatcher.value;
         return model;
    }
}
