import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
];

@NgModule({
  declarations: [
    AddUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
