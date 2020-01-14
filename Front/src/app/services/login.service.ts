import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";
import {observable, Observable , of as observableOf} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public resourceUrl =  'http://localhost:3000/login';
  constructor(private http: HttpClient) { }


  //check credentials
  login(user: User): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.resourceUrl+'/', JSON.parse(JSON.stringify(user)), { observe: 'response' });
  }
  logout(){
    localStorage.removeItem('obj');
  }
  isLoggedIn():boolean{

    return !! localStorage.getItem('obj');
  }
}
