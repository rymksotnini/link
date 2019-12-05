import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {Role} from "../../environments/environment";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();

    submitted : boolean = false;
    user = new User();

    // @Output()
    // public Login: EventEmitter<void> = new EventEmitter<void>();

    constructor(private activatedRoute :ActivatedRoute,private userService :UserService,private router :Router) {

    }

    ngOnInit() {

    }
    onLogin(){
        this.router.navigate(['/login']);
    }
    onSubmit(formulaire : NgForm){
        console.log("testing");
        let prefixType :string;
        this.submitted=formulaire.valid;
        if(!this.submitted)
            return  ;

        this.user.UserName=formulaire.controls['organizationName'].value;
        console.log(formulaire.controls['password'].value);
        this.user.email=formulaire.controls['organizationEmail'].value;
        this.user.password=formulaire.controls['password'].value;
        this.user.role=Role.Organization;
        console.log(this.user);
       // this.userService.create(this.user);

    }


    reset(formulaire:NgForm){
        formulaire.resetForm();
    }


}
