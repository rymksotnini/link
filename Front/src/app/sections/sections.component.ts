import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  focus;
  focus1;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  fun(){
    this.activatedRoute.params.subscribe(
        (parm) => console.log("param ",parm)
    )
  }

}
