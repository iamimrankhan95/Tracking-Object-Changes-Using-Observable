import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.entity';
import { Urls } from 'src/app/shared/helpers/urls.const';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, ) {}

  public updateStatus(user:User){
    return this.http.post<any>(Urls.FETCH_USER_ACTIVE_STATUS,user);
  }
  
}
