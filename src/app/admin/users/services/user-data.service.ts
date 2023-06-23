import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user-grid.model";
import { UserDataResponse, UserResponse } from "../models/response.model";
import { map, Observable, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";


@Injectable()
export class UserDataService {

  readonly requestUrl = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.requestUrl)
      .pipe(map((res) => this.getMappedUsers(res.data)))
  }

  getMappedUsers(users: UserDataResponse[]): User[] {
    return users.map((user) => {
      return {
        id: user.id,
        avatar: user.avatar,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        isDeleted: false
      }
    })
  }

  createUser(user: User): Observable<User> {
    return of({
      ...user,
      id: Math.floor(Math.random() * 100),
      avatar: 'https://i.pravatar.cc/64'
    })
  }

  // request404(): Observable<void> {
  //   return this.http.get<any>(this.unknownRequestUrl + `/23`)
  // }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<any>(this.requestUrl + `${id}`);
  }
}
