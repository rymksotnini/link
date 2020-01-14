import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";
import {observable, Observable, of as observableOf, Subject} from "rxjs";
import {Role} from "../../environments/environment";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  refresh: Subject<any> = new Subject();
  public resourceUrl =  'http://localhost:3000/login';
  constructor(private http: HttpClient) { }


  //check credentials
  login(user: User): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.resourceUrl+'/', JSON.parse(JSON.stringify(user)), { observe: 'response' }).pipe(
        tap(() => {
          this.refresh.next();
        })
    );

  }

  signUp(user :User):Observable<HttpResponse<any>>{
    return this.http.post<any>(this.resourceUrl+'/register', JSON.parse(JSON.stringify(user)), { observe: 'response' });
  }
  logout(){
    localStorage.removeItem('obj');
    this.refresh.next();
  }
  isLoggedIn():boolean{

    return !! localStorage.getItem('obj');
  }

  getCurrentUser():Observable<HttpResponse<User>>{
    var storage = JSON.parse(localStorage.getItem('obj'));
    var userEmail = storage['1']['user'];
    console.log(userEmail);
    return this.http.get<User>(this.resourceUrl+'/currentUser/'+userEmail,{ observe: 'response' })
  }

}
