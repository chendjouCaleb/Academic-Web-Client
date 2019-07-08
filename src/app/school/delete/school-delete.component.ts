import { Component, Input } from '@angular/core';
import { School } from 'src/models/entity/school.entity';
import { AlertEmitter } from 'src/common/alert.emitter';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AppConfirm } from 'src/common/confirm/confirm';
import { Router } from '@angular/router';

@Component({
    templateUrl: "school-delete.component.html",
    selector: "app-school-delete"
})
export class SchoolDeleteComponent {
    @Input()
    school: School;

    constructor(private _alert: AlertEmitter, private _repository: SchoolRepository,
        private _confirm: AppConfirm, private _router: Router) {}

    delete() {
        this._confirm.confirmPassword("Veuillez confirmer votre mot de passe pour effectuer la suppréssion de l'établissement")
        .accept.subscribe(() => {
            this._repository.delete(this.school.id).subscribe(() =>{
                this._alert.info("L'établissement a été supprimé");
                this._router.navigateByUrl("/schools/list")
            }, error => this._alert.error(error.error.message));
        })
    }
}