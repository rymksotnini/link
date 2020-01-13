import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public resourceUrl =  'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public uploadImage(image: File): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.resourceUrl+'/upload/image', JSON.parse(JSON.stringify(image)), { observe: 'response' });
  }
}
