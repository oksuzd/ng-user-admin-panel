import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user-grid.model";
import { UserDataResponse, UserResponse } from "../models/response.model";
import { map, Observable, tap } from "rxjs";

@Injectable()
export class UserService {
  readonly requestUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.requestUrl)
      .pipe(
        tap((res) => console.log('test-service', res.data)),
        map((res) => this.getMappedUsers(res.data))
      )
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
}
