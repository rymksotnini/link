import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public resourceUrl =  'http://localhost:3000/api/user';
  constructor(private http: HttpClient) { }
  create(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.resourceUrl, user, { observe: 'response' });
  }

  update(user: User): Observable<HttpResponse<User>> {
    return this.http.put<User>(this.resourceUrl, user, { observe: 'response' });
  }

}
