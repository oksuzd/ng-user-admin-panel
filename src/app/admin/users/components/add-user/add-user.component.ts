import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../models/user-grid.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  newUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  }

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
