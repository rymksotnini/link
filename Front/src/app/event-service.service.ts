import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Event} from "./models/Event";

@Injectable({
    providedIn: 'root'
})
export class EventServiceService {

    public resourceUrl =  'http://localhost:3000/event';
    constructor(private http: HttpClient) { }

    create(event: Event): Observable<HttpResponse<Event>> {
         console.log("test")
        return this.http.post<Event>(this.resourceUrl+'/add', JSON.parse(JSON.stringify(event)), { observe: 'response' });
    }

    update(event: Event,id : number): Observable<HttpResponse<Event>> {
        return this.http.put<Event>(this.resourceUrl+'/update/'+id, event, { observe: 'response' });
    }

    getOrganization(id:number):Observable<Event>{
        return this.http.get<Event>(this.resourceUrl+'/'+id)
    }

    getAll():Observable<Event[]>{
        return this.http.get<Event[]>(this.resourceUrl+'/' )
    }

}

