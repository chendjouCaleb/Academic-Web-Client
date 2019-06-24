import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatSidenavModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule,
  MatMenuModule, MatToolbarModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, MatTableModule,
  MatSortModule, MatTabsModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatList,
  MatListModule, MatTooltipModule
} from "@angular/material";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [ BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatSortModule, MatTooltipModule,
    MatSidenavModule, MatProgressSpinnerModule, MatDialogModule, MatSelectModule, MatTableModule, MatTableModule,
    MatSidenavModule, MatButtonModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatTabsModule, MatRadioModule,
    MatMenuModule, MatToolbarModule, MatSnackBarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule ],

  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatSortModule, MatRadioModule, MatTooltipModule,
    MatSidenavModule, MatProgressSpinnerModule, MatDialogModule, MatSelectModule, MatTableModule, MatTabsModule,
    MatSidenavModule, MatButtonModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatListModule,
    MatMenuModule, MatToolbarModule, MatSnackBarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: "fr-FR"},
  ],
})
export class MaterialModule { }
