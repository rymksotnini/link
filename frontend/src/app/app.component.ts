import { Component } from '@angular/core';
import {Observable} from "rxjs/index";
import {catchError, map} from "rxjs/internal/operators";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient) {}

  gettest(): Observable<String[]> {
    return this.http.get<String[]>("http://localhost:3000/test");
  }

  test()
  {
    this.gettest().subscribe(
      res=> console.log("test",res)
    )
  }
}
