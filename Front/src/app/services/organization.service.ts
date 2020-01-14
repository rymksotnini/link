import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Organization} from "../models/Organization";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

    public resourceUrl =  'http://localhost:3000/organization';
    constructor(private http: HttpClient) { }

    create(organization: Organization): Observable<HttpResponse<Organization>> {
        return this.http.post<Organization>(this.resourceUrl+'/add', JSON.parse(JSON.stringify(organization)), { observe: 'response' });
    }

    update(organization: Organization,id : number): Observable<HttpResponse<Organization>> {
        return this.http.put<Organization>(this.resourceUrl+'/update/'+id, organization, { observe: 'response' });
    }

    getOrganization(id:number):Observable<Organization>{
      return this.http.get<Organization>(this.resourceUrl+'/'+id)
    }

    getAll():Observable<Organization[]>{
        return this.http.get<Organization[]>(this.resourceUrl+'/All/')
    }

}
