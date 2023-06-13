import { Component} from '@angular/core';
import { Observable} from "rxjs";

import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from "ag-grid-community";
import { User } from "../../models/user-grid.model";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public columnDefs: ColDef[] = [
    { field: 'id', headerName: '', minWidth: 40, maxWidth: 50},
    { field: 'avatar', headerName: '', maxWidth: 64, autoHeight: true, cellClass: 'user-avatar',
    cellRenderer: (params: ICellRendererParams) => `<img src="${params.value}" alt="avatar">`},
    { field: 'firstName', headerName: 'Name'},
    { field: 'lastName', headerName: 'Last Name'},
    { field: 'email', headerName: 'Email'},
    { field: 'isDeleted', headerName: '', maxWidth: 50}
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellClass: 'cells-styling',
  };

  private gridApi!: GridApi<User>;
  public rowData$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.rowData$ = this.userService.getUsers();
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 200)
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

}
