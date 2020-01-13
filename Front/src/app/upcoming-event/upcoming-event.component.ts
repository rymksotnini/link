import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit {
    @Input()
    title : string ;
    @Input()
    description : string;
    @Input()
    eventPhoto : string;
    constructor()
    {
        this.title= "Back To school" ;
        this.description="Argon is a great free UI package based on Angular that includes the most important components and features.";
        this.eventPhoto="./assets/img/theme/img-1-1200x1000.jpg" ;
    }
   ngOnInit()
   {

   }

}
