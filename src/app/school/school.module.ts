import { NgModule } from "@angular/core";
import { CommonsModule } from "../../common/common.module";
import { SchoolAddComponent } from "./add/school-add.component";
import { SchoolHomeComponent } from "./home/school-home.component";
import { SchoolListComponent } from "./list/school-list.component";
import { PersistenceModule } from "../../models/persistence/persistence.module";
import { MatButtonModule, MatDialogModule, MatInputModule, MatTabsModule, MatMenuModule,MatNativeDateModule, MatCheckboxModule, MatDatepickerModule } from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { IsAuthenticatedGuard } from "../identity/authentication.guard";
import { LayoutModule } from "../layout/layout.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SchoolDataResolver } from './school.data.resolver';
import { SchoolToolbarComponent } from './toolbar/school.toolbar.component';
import { SchoolInfoComponent } from './info/school.info.component';
import { SchoolSettingsAddressComponent } from './settings/address/school.settings.address.component';
import { SchoolDeleteComponent } from './settings/delete/school.delete.component';
import { SchoolEmailComponent } from './settings/email/school.email.component';
import { SchoolSettingsInfoComponent } from './settings/info/school.settings.info.component';
import { SchoolBannerComponent } from './banner/school-banner.component';
import { SchoolPathComponent } from './path/school-path.component';
import { SchoolSettingsComponent } from './settings/school-settings.component';
import { SchoolEmailDeleteComponent } from './settings/email/school-email-delete.component';
import { SchoolPhoneComponent } from './settings/phone/school.phone.component';
import { SchoolPhoneDeleteComponent } from './settings/phone/school-phone-delete.component';
import { SchoolLayoutComponent } from './layout/school-layout.component';

const routes: Routes = [
  {
    path: "", canActivate: [IsAuthenticatedGuard], children: [
      { path: "list", component: SchoolListComponent },
      { path: "add", component: SchoolAddComponent },
      { path: ":schoolId/home", component: SchoolHomeComponent, resolve: [SchoolDataResolver] },
      { path: ":schoolId/information", component: SchoolInfoComponent, resolve: [SchoolDataResolver] },
      { path: ":schoolId/settings", component: SchoolSettingsComponent, resolve: [SchoolDataResolver] }
    ]
  }
];

@NgModule({
  imports: [CommonModule, CommonsModule, ReactiveFormsModule, FormsModule, PersistenceModule, MatDialogModule,
    MatButtonModule, MatInputModule, MatTabsModule, MatMenuModule, MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes), LayoutModule],
  declarations: [SchoolAddComponent, SchoolHomeComponent, SchoolListComponent, SchoolToolbarComponent,
    SchoolInfoComponent, SchoolSettingsAddressComponent, SchoolDeleteComponent, SchoolEmailComponent,
    SchoolSettingsInfoComponent, SchoolBannerComponent, SchoolPathComponent, SchoolLayoutComponent,
    SchoolEmailDeleteComponent, SchoolPhoneComponent, SchoolPhoneDeleteComponent,
  SchoolSettingsComponent],
  entryComponents: [SchoolAddComponent, SchoolEmailDeleteComponent, SchoolPhoneDeleteComponent],
  providers: [SchoolDataResolver],
  exports: [ SchoolPathComponent, SchoolLayoutComponent ]
})
export class SchoolModule {

}
