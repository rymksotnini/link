import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public resourceUrl =  'http://localhost:3000/login';
  constructor(private http: HttpClient) { }


  //check credentials
  create(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.resourceUrl+'/', JSON.parse(JSON.stringify(user)), { observe: 'response' });
  }
}
