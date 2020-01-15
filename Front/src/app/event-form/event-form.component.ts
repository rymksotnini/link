import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Event} from "../models/Event";
import {EventServiceService} from "../event-service.service";
import {Moment} from "moment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

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
    eventImage : string ;
    sponsoringFile : string;
    images;
    filesponso;
    multipleImages = [];
    update : boolean = false ;
    id : number =0;
    constructor(private eventService : EventServiceService,  private router: Router, private http: HttpClient ,  private activatedRoute: ActivatedRoute) { }
    ngOnInit()
    {   this.event = new Event(this.id,"",null,null,"","","","","",0,0)
        this.activatedRoute.params.subscribe(
            (res) =>
            {
                if(res.id)
                {
                    this.eventService.getEvent(res.id).subscribe(
                        (res) =>
                        {
                            this.event = res ;
                            this.update = true ;
                            this.id = res.id
                            this.eventImage = res.image;
                            this.filesponso  = res.sponsoringFile ;
                        }
                    )
                }
            }
        )
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.images = file;
        }
    }
    selectFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.filesponso = file;
        }
    }

    selectMultipleImage(event){
        if (event.target.files.length > 0) {
            this.multipleImages = event.target.files;
        }
    }

    sendFile(form : NgForm){
        const formData = new FormData();
        formData.append('file', this.filesponso);

        this.http.post<any>('http://localhost:3000/file', formData).subscribe(
            (res) =>
            {
                this.sponsoringFile = res.name
                this.EventCreation(form);
            } ,
            (err) => console.log(err)
        );
    }
    submit(form : NgForm){
        const formData = new FormData();
        formData.append('file', this.images);

        this.http.post<any>('http://localhost:3000/file', formData).subscribe(
            (res) =>
            {
                this.eventImage = res.name;
                this.sendFile(form);
            } ,
            (err) => console.log(err)
        );
    }

    onMultipleSubmit(){
        const formData = new FormData();
        for(let img of this.multipleImages){
            formData.append('files', img);
        }

        this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
            (res) =>
            {
            },
            (err) => console.log(err)
        );
    }


    EventCreation(form : NgForm) {
        this.submitted = true;
        this.moment = new Date(form.controls.startDate.value.day, form.controls.startDate.value.month, form.controls.startDate.value.year, 5, 0, 0)
         console.log("whyyy")
        this.event = new Event(this.id,form.controls.name.value,this.moment,  this.moment , form.controls.place.value , form.controls.category.value ,form.controls.description.value,this.eventImage,this.sponsoringFile
        , Number(form.controls.budget.value ),Number(0) )
        if(!this.update) {
            this.eventService.create(this.event).subscribe(
                (result) => {
                    console.log("added")
                    alert('Event Created successfully!! :-)\n\n');
                    this.router.navigate(['/events']);


                }
            );
        }
        else {
            this.eventService.update(this.event , this.event.id).subscribe(
                (result) =>
                {
                    alert('Event Updated successfully!! :-)\n\n');
                    this.router.navigate(['/events']);
                },
                (err) =>
            {

            }
            )

        }
    }

}