import { Component, Input } from '@angular/core';
import { School } from 'src/models/entity/school.entity';
import { SchoolRepository } from 'src/models/persistence/school.repository';
import { AlertEmitter } from 'src/common/alert.emitter';

@Component({
    templateUrl: "school-image.component.html",
    selector: "app-school-image"
})
export class SchoolImageComponent {
    @Input()
    school: School;

    constructor(private _repository: SchoolRepository, private _alert: AlertEmitter) { }

    fileToUpload: File;

    selectFile(files: FileList){
        this.fileToUpload = files.item(0);
    }


    uploadFile() {
        this._repository.editImage(this.school.id, this.fileToUpload).subscribe(result => {
            this.school.imageURL = result + "?" + Date.now();
            this._alert.success("Le logo de l'établissement à été mis à jour!");
        }, error => this._alert.error(error.error.image))
    }
}