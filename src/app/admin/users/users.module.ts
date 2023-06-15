import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './pages/users/users.component';
import { AgGridModule } from "ag-grid-angular";
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user.service";
import { AgRowDeleteComponent } from './grid-components/ag-row-delete/ag-row-delete.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: UsersComponent},
];

@NgModule({
  declarations: [
    AddUserComponent,
    UsersComponent,
    AgRowDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgGridModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserService]
})
export class UsersModule { }
