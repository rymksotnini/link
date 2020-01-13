import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sponsor} from "../models/Sponsor";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  public resourceUrl =  'http://localhost:3000/sponsor';

  constructor(private http: HttpClient) { }

  getSponsors() : Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.resourceUrl+'/all');
  }

  getSponsor(id : number): Observable<Sponsor>{
    return this.http.get<Sponsor>(this.resourceUrl+'/'+id);
  }

  addSponsor(sponsor : Sponsor) : Observable<HttpResponse<Sponsor>> {
    return this.http.post<Sponsor>(this.resourceUrl+'/add', JSON.parse(JSON.stringify(sponsor)), { observe: 'response' });
  }

}
