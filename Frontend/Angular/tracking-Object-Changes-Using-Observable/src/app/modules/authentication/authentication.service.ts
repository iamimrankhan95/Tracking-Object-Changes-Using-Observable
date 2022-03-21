import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/app/shared/helpers/urls.const';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  public authentication(queryParams: Map<string,any>): Observable<any>{
    return this.http.post(Urls.USER_SIGN_IN,queryParams.get("user"));
  }
}
