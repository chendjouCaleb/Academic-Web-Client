import { EvFormGroup, EvFormControl } from "src/common/form/forms";
import { AddAccountModel } from "src/models/entity/account.entity";

export class AccountAddFormGroup extends EvFormGroup<AddAccountModel> {
    constructor() {
        super({
            name: new EvFormControl("name", ""),
            surname: new EvFormControl("surname", ""),
            email: new EvFormControl("email", ""),
            password: new EvFormControl("password", ""),
            passwordMatcher: new EvFormControl("passwordMatcher", "")
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
