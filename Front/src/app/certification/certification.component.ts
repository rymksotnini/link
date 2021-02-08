import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Moment} from "moment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Certificate} from "../models/Certificate";
import { saveAs } from 'file-saver';
import {LoginService} from "../services/login.service";
import {User} from "../models/User";

// import custom validator to validate that password and confirm password fields match

@Component({
    selector: 'app-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
    submitted = false;
    certificate : Certificate ;
    moment : Date;
    certificateImage : string ;
    sponsoringFile : string;
    images;
    filesponso;
    multipleImages = [];
    update : boolean = false ;
    id : number =0;
    email : string  ;
    password : string ;
    constructor( private router: Router, private http: HttpClient ,  private activatedRoute: ActivatedRoute, private loginService : LoginService) { }
    ngOnInit()
    {
        this.loginService.getCurrentUser().subscribe((user) => {
            if (user) {
                this.email = user.body.email;
                console.log("email : " + this.email  )
                this.password= user.body.password;

            };})

    }


    OnSubmit(form : NgForm) {
        this.submitted = true;


        console.log("email : " + this.email  )
        console.log("password : " + this.password  )
        this.certificate = new Certificate(this.email,form.controls.c.value ,form.controls.st.value ,form.controls.l.value ,form.controls.o.value , form.controls.ou.value , this.password )
        this.http
            .post("http://192.168.56.103:5002/generateKey",this.certificate, { responseType: "blob" }) //set response Type properly (it is not part of headers)
            .toPromise()
            .then(blob => {

                saveAs(blob,"PrivateKey.der")

            })
            .catch(err => console.error("download error = ", err))

    }

}