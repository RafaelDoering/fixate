import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatProgressBarModule,
  MatListModule,
  MatChipsModule
} from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatProgressBarModule,
  MatListModule,
  MatChipsModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class AppMaterialModule { }
