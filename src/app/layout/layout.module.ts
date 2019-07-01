import { NgModule } from "@angular/core";
import { CommonsModule } from "src/common/common.module";
import { RouterModule } from "@angular/router";
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from "@angular/material";
import { AppLayoutComponent } from "./app-layout.component";
import { AppToolbarComponent } from "./app-toolbar.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [ CommonModule, CommonsModule, RouterModule, MatToolbarModule, MatIconModule,
        MatMenuModule, MatButtonModule],
    declarations: [ AppLayoutComponent, AppToolbarComponent ],
    exports: [ AppLayoutComponent, AppToolbarComponent ]
})
export class LayoutModule {

}
