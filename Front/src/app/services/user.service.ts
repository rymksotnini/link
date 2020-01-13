import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public resourceUrl =  'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  create(user: User): Observable<HttpResponse<User>> {

    return this.http.post<User>(this.resourceUrl+'/add', JSON.parse(JSON.stringify(user)), { observe: 'response' });
  }

  //not tested yet
  update(user: User,id : number): Observable<HttpResponse<User>> {
    return this.http.put<User>(this.resourceUrl+'/update/'+id, user, { observe: 'response' });
  }



  delete(id:number):Observable<HttpResponse<any>>{
    return this.http.get<any>(this.resourceUrl+'/delete/'+id,  { observe: 'response' });

  }

  findById(id:number):Observable<HttpResponse<User>>{
    return this.http.get<any>(this.resourceUrl+'/'+id,  { observe: 'response' });
  }

}
