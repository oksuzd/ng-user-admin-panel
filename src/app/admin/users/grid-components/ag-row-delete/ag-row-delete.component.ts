import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { UserCellsParams } from "../../models/user-grid.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogWindowComponent } from "../../../../shared/components/dialog-window/dialog-window.component";

@Component({
  selector: 'app-ag-row-delete',
  templateUrl: './ag-row-delete.component.html',
  styleUrls: ['./ag-row-delete.component.scss']
})
export class AgRowDeleteComponent implements ICellRendererAngularComp {

  params!: ICellRendererParams & UserCellsParams;

  constructor(public dialog: MatDialog) {}

  agInit(params: ICellRendererParams & UserCellsParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  deleteUser() {
    const dialogRef = this.dialog.open(DialogWindowComponent, {width: '250px'});
    dialogRef.afterClosed()
      .subscribe((res) => {
        if (!!res) {
          this.params.onDelete(this.params.data);
        }
      })
  }
}
