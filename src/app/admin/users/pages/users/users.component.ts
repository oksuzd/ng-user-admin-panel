import { Component, OnDestroy } from '@angular/core';
import { catchError, Subject, take, takeUntil, tap, throwError } from "rxjs";

import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from "ag-grid-community";
import { User, UserCellsParams } from "../../models/user-grid.model";

import { AgRowDeleteComponent } from "../../grid-components/ag-row-delete/ag-row-delete.component";
import { MatDialog } from "@angular/material/dialog";
import { AddUserComponent } from "../../components/add-user/add-user.component";
import { UserDataService } from "../../services/user-data.service";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {

  private gridApi!: GridApi<User>;
  private notifier$: Subject<null> = new Subject();
  public rowData: User[] = [];

  public columnDefs: ColDef[] = [
    {field: 'id', headerName: '', minWidth: 40, maxWidth: 50},
    {
      field: 'avatar', headerName: '', maxWidth: 64, autoHeight: true, cellClass: 'user-avatar',
      cellRenderer: (params: ICellRendererParams) => `<img src="${params.value}" alt="avatar">`
    },
    {field: 'firstName', headerName: 'Name'},
    {field: 'lastName', headerName: 'Last Name'},
    {field: 'email', headerName: 'Email'},
    {
      field: 'id', headerName: '', maxWidth: 70, cellClass: 'cells-styling__center',
      cellRenderer: AgRowDeleteComponent,
      cellRendererParams: {
        onDelete: (entity) => {
          this.userDataService.deleteUser(entity.id)
            .pipe(
              tap(() => {
                this.rowData = this.rowData.filter((user) => user.id !== entity.id);
                this.gridApi.setRowData(this.rowData);
              }),
              take(1),
              takeUntil(this.notifier$),
              catchError((err) => throwError(err))
            )
            .subscribe();
        }
      } as UserCellsParams<User>
    }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    cellClass: 'cells-styling',
  };

  constructor(
    private userDataService: UserDataService,
    public dialog: MatDialog
  ) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.userDataService.getUsers()
      .pipe(
        take(1),
        catchError((err) => throwError(err))
      )
      .subscribe((data) => {
        this.rowData = data;
        setTimeout(() => {
          this.gridApi.sizeColumnsToFit();
        }, 200)
      });
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent,
        {width: '260px'});

      dialogRef.afterClosed()
        .subscribe((res) => {!!res && this.createNewUser(res)})
  }

  createNewUser(user: User) {
    this.userDataService.createUser({
      ...user,
      id: 0
    })
      .pipe(
        take(1),
        takeUntil(this.notifier$),
      )
      .subscribe(
        (res) => {
          this.rowData.push(res);
          this.gridApi.setRowData(this.rowData);
        }
      )
  }

  showRowData() {
    console.log('ROW_DATA', this.rowData);
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  ngOnDestroy(): void {
    this.notifier$.next(null);
    this.notifier$.complete()
  }
}
