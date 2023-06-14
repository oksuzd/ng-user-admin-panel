import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { UserCellsParams } from "../../models/user-grid.model";

@Component({
  selector: 'app-ag-row-delete',
  templateUrl: './ag-row-delete.component.html',
  styleUrls: ['./ag-row-delete.component.scss']
})
export class AgRowDeleteComponent implements ICellRendererAngularComp{

  value = 'X';
  userId!: number | undefined;
  // value!: number | undefined;
  // userId: number | undefined;

  agInit(params: ICellRendererParams & UserCellsParams): void {
    // this.value = 0;
    // this.value = params.value;
    // this.userId = params.userId;
    this.userId = params.value;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  deleteUser() {
    // this.value = this.userId;
    const delUserId = this.userId;
  }
}
