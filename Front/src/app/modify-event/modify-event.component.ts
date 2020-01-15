import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../models/Event";
import {EventServiceService} from "../event-service.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {
    events :  any[]
    eventOrig : Event[]
    event : Event
    imageUrl : any
    i = 0
    input : false
    constructor(private eventService : EventServiceService ,  private router: Router, private sanitizer : DomSanitizer , private http: HttpClient ) { }
    ngOnInit() {
        this.eventService.getAll().subscribe(
            (res) => {
                let i

                this.events = res
                this.eventOrig = []
                for (i = 0; i < res.length; i++)
                {   this.eventOrig[i] = new Event(
                    res[i].id,
                    res[i].name,
                    res[i].startTime,
                    res[i].endTime,
                    res[i].place,
                    res[i].category,
                    res[i].description,
                    res[i].image,
                    res[i].sponsoringFile,
                    res[i].budget,
                    res[i].fundings
                )
                    this.events[i].input = false
                    this.getImage( this.events[i] ) }

            } )

    }

    edit(index : number)
    {
        this.router.navigate(['/addevent/',this.events[index].id]);
    }
    delete(index : number)
        {

            this.events.splice(index, 1);
            this.eventService.delete(this.eventOrig[index].id).subscribe(
                (res) => {
                    console.log("delete done: " + this.eventOrig[index].id)
                }
            );
        }
    getImage(event : Event)
    {
        this.http
            .get("http://localhost:3000/download/"+event.image, { responseType: "blob" }) //set response Type properly (it is not part of headers)
            .toPromise()
            .then(blob => {
                this.imageUrl= URL.createObjectURL(blob)
                event.image = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl )
                this.i = this.i +1

            })
            .catch(err => console.error("download error = ", err))

    }




}
