import { Component} from '@angular/core';
import { Observable} from "rxjs";

import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from "ag-grid-community";
import { User, UserCellsParams } from "../../models/user-grid.model";
import { UserService } from "../../services/user.service";
import { AgRowDeleteComponent } from "../../grid-components/ag-row-delete/ag-row-delete.component";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  private gridApi!: GridApi<User>;
  public rowData$!: Observable<User[]>;

  public columnDefs: ColDef[] = [
    { field: 'id', headerName: '', minWidth: 40, maxWidth: 50},
    { field: 'avatar', headerName: '', maxWidth: 64, autoHeight: true, cellClass: 'user-avatar',
    cellRenderer: (params: ICellRendererParams) => `<img src="${params.value}" alt="avatar">`},
    { field: 'firstName', headerName: 'Name'},
    { field: 'lastName', headerName: 'Last Name'},
    { field: 'email', headerName: 'Email'},
    { field: 'id', headerName: '', maxWidth: 70, cellClass: 'cells-styling__center',
      cellRenderer: AgRowDeleteComponent,
      // cellRendererParams: {userId: 10 } as UserCellsParams
    }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellClass: 'cells-styling',
  };

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
