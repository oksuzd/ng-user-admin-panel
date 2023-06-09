import { Component, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { User } from "../../models/user.model";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  // public rowData!: User[];

  public  mockData: User[] = [
    {id: 1, avatar: 'img1', name: 'Oksana', lastName: 'Chelapko', email: '123', isDeleted: false},
    {id: 2, avatar: 'img2', name: 'Iurii', lastName: 'Suzdaltsev', email: '456', isDeleted: false},
    {id: 3, avatar: 'img3', name: 'Harry', lastName: 'Potter', email: '789', isDeleted: true}
  ]

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id', headerName: ''},
    { field: 'name', headerName: 'Name'},
    { field: 'lastName', headerName: 'Last Name'},
    { field: 'email', headerName: 'Email' },
    { field: 'isDeleted', headerName: '' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData: User[] = [];
  // public rowData$!: Observable<any[]>;
  // public rowData$!: Observable<User[]>;

  // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData = this.mockData;
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
}
