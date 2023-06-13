import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";

import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent, ICellRendererParams } from "ag-grid-community";
import { User } from "../../models/user-grid.model";
import { UserService } from "../../services/user.service";

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import '../styles.css';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 50},
    { field: 'avatar', headerName: 'Avatar',
    cellRenderer: (params: ICellRendererParams) => `<img src="${params.value}" alt="avatar">`},
    { field: 'firstName', headerName: 'Name'},
    { field: 'lastName', headerName: 'Last Name'},
    { field: 'email', headerName: 'Email' },
    { field: 'isDeleted', headerName: '' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  public rowData$!: Observable<User[]>;

  // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private userService: UserService) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.userService.getUsers()
  }

  // onGridReady(params: GridReadyEvent) {
  //   this.rowData$ = this.http
  //     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  // }

  // Example of consuming Grid Event
  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }

  // ngOnInit() {
  //   this.userService.getUsers()
  //     .pipe(
  //       tap((res) => console.log('test-component', res))
  //     )
  //     .subscribe();
  // }
}
