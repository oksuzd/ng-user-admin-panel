import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogWindowComponent } from "./components/dialog-window/dialog-window.component";


import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

const materialModules = [
  MatButtonModule,
  MatDialogModule,
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
