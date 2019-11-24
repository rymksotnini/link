import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as events from "events";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private http: HttpClient) { }

  events:String;

  ngOnInit() {
    this.getEvents().subscribe(
      (events) => this.events = events
    )
  }

  getEvents(): Observable<String> {
    return this.http.get<String>("http://localhost:3000/events");
  }

}
