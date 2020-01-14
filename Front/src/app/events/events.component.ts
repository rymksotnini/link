import { Component, OnInit } from '@angular/core';
import {EventServiceService} from "../event-service.service";
import {Event} from "../models/Event";
import {HttpClient} from "@angular/common/http";
import { saveAs } from 'file-saver';
import {toBase64String} from "@angular/compiler/src/output/source_map";
import {DomSanitizer} from "@angular/platform-browser";
import {observable} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    events :  any[]
    eventOrig : Event[]
    event : Event
    imageUrl : any
    i = 0
    input : false
  constructor(private eventService : EventServiceService , private sanitizer : DomSanitizer , private http: HttpClient ) { }

  ngOnInit() {
      this.loadStripe();
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

    loadStripe() {

        if(!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
        }
    }
    //To move this to the navbar component + service in the constructor
    pay(amount: number , index : number ) {

        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_b5EhK6kbYuK6AMb07vgV82MK0021wa2BWM',
            locale: 'auto',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                console.log(token)
                console.log("i =", this.i)
            }
        });


        handler.open({
            name: 'Thanks For you Support to ',
            description: this.event.name,
            amount: amount,
            closed: ()=>{this.EndOfPayment(amount,index);}
        });


    }
    EndOfPayment(amount : number , index: number)
    {    console.log(" funding",this.event.fundings)
        console.log(" amount",amount)
        this.event.fundings = this.event.fundings+Number(amount);
        console.log("event funding",this.event.fundings)
        this.eventService.update(this.event,this.event.id).subscribe(
            (res) =>
            {  console.log("helloooooooo");
                alert("THANKS FOR YOUR SUPPORT")
            }
        )
        this.events[index].fundings = this.event.fundings;

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
      getSponsoringFile(index : number)
      {   console.log("test test test")
          this.http
              .get("http://localhost:3000/download/"+ this.events[index].sponsoringFile, { responseType: "blob" }) //set response Type properly (it is not part of headers)
              .toPromise()
              .then(blob => {

                  saveAs(blob,this.events[index].sponsoringFile)

              })
              .catch(err => console.error("download error = ", err))
      }
    inputOn(index : number)
    {
        this.events[index].input = !this.events[index].input
    }
    Fund(index: number , amount: number)
    {
        this.inputOn(index)
        this.event = this.eventOrig[index]
        console.log(this.event ,"ev")

        this.pay(amount , index )

    }


  }

