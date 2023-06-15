import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../models/user-grid.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  firstNameValue: string = '';
  lastNameValue: string = '';
  emailValue: string = '';

  newUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  }

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {
  }

  onNoClick(): void {

     console.log(this.newUser)
    this.dialogRef.close();
  }
}
