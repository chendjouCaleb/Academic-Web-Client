import { Component } from '@angular/core';
import { ConnectionService } from '../identity/connection-service';

@Component({
    templateUrl: "app-toolbar.component.html",
    selector: "app-toolbar"
})
export class AppToolbarComponent {
    constructor(public auth: ConnectionService) {}
}