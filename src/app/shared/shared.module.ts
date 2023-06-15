import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogWindowComponent } from "./components/dialog-window/dialog-window.component";


import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    DialogWindowComponent,
  ],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ]
})
export class SharedModule {
}
