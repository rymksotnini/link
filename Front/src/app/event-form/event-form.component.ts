
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Event} from "../models/Event";
import {EventServiceService} from "../event-service.service";
import {Moment} from "moment";

// import custom validator to validate that password and confirm password fields match

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
    submitted = false;
    event : Event ;
    moment : Date;

    constructor(private eventService : EventServiceService) { }

    ngOnInit() {

    }

    // convenience getter for easy access to form fields

    onSubmit(form : NgForm) {
        this.submitted = true;
        console.log(form.controls.startDate.value)
        this.moment = new Date(form.controls.startDate.value.day, form.controls.startDate.value.month, form.controls.startDate.value.year, 5, 0, 0)


        this.event = new Event(form.controls.name.value,this.moment,  this.moment , form.controls.place.value , form.controls.category.value ,form.controls.description.value)
        this.eventService.create(this.event).subscribe(
            (result) =>
            {
                console.log("added")
            }
        );
        alert('Event Created successfully!! :-)\n\n');
    }

    onReset() {
        this.submitted = false;
    }
}