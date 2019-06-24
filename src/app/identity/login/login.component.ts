import { Component } from '@angular/core';
import { LoginFormGroup } from './login-add.form';
import { AccountRepository } from 'src/models/persistence/account.repository';
import { Title } from '@angular/platform-browser';
import { AlertEmitter } from 'src/common/alert.emitter';
import { ConnectionService } from '../connection-service';
import { Account } from "src/models/entity/account.entity";
import { Router } from '@angular/router';

@Component({
    templateUrl: "login.component.html"
})
export class LoginComponent {
    form = new LoginFormGroup();

    account: Account;
    constructor(public title: Title, private _connectionService: ConnectionService,
        private _router: Router,
        private _accountRepository: AccountRepository, private _alert: AlertEmitter) {
        title.setTitle("Connexion");
    }

    ngOnInit(): void { }

    checkEmail() {
        const email = this.form.getControl("email");
        if(email.valid) {
            this._accountRepository.findByEmail(email.value).subscribe(user => {
                if(!user) {
                    email.addError("Aucun compte utilisant cet adresse existe!")
                }else{
                    this.account = user;
                }
            });
        }
    }

    checkPassword() {
        const password = this.form.getControl("password");
        if(password.valid && this.account) {
            this._accountRepository.checkPassword(this.account.id, password.value)
            .subscribe(re=> {
                if(!re) {
                    password.addError("Le mot de passe ne correspond pas au compte!")
                }
            })
        }
    }


    login() {

        const model = this.form.getModel();

        
        this._connectionService.connect(model).then(account => {
            this._router.navigateByUrl("/home");
            this._alert.success(`Vous êtes maintenant connecté ${account.fullName}`);
        }, error => {
            if(error.error && error.error.message) {
                this._alert.error(error.error.message)
            }
            if(error.message) {
                this._alert.error(error.message)
            }
        })
    }
}