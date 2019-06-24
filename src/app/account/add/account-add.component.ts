import { Component, OnInit } from "@angular/core";
import { AccountAddFormGroup } from "./account-add.form";
import { Router } from "@angular/router";
import { AccountRepository } from "src/models/persistence/account.repository";
import { AlertEmitter } from "src/common/alert.emitter";
import { Title } from "@angular/platform-browser";

@Component({
    templateUrl: "account-add.component.html"
})
export class AccountAddComponent implements OnInit{
    
    form = new AccountAddFormGroup();

    constructor(private _router: Router, private _repository: AccountRepository, 
        private _alert: AlertEmitter, public title: Title){
            this.title.setTitle("Créer un compte");
    }

    ngOnInit(): void {
        const password = this.form.getControl("password");
        const passwordMatcher = this.form.getControl("passwordMatcher");

        passwordMatcher.valueChanges.subscribe(value => {
            if(password.value !== value) {
                passwordMatcher.addError("Mots de passe non correspondant");
            }
        });

        password.valueChanges.subscribe(value => {
            if(passwordMatcher.value === value) {
                passwordMatcher.setValue(passwordMatcher.value);
            }else if(passwordMatcher.value.length > 1 && passwordMatcher.value !== value){
                passwordMatcher.addError("Mots de passe non correspondant");
            }
        });

    }

    checkEmail() {
        const email = this.form.getControl("email");
        if(email.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/)){
            this._repository.findByEmail(email.value).subscribe(user => {
                console.log(user);
                if(user) {
                    email.addError("Cette email est déjà utilisé")
                }
            })
        }
    }



    addAccount() {
        if(this.form.valid){
            this._repository.add(this.form.getModel()).subscribe(account => {
                this._alert.success("Votre compte a été crée!");
                this._router.navigateByUrl("/login")
            }, error => this._alert.error(error.error.message));
        }
    }
}