import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {Role} from "../../environments/environment";
import {Organization} from "../models/organization";
import {OrganizationService} from "../services/organization.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    valid : boolean = true ;
    submitted : boolean = false;
    user = new User();
    organization = new Organization();

    // @Output()
    // public Login: EventEmitter<void> = new EventEmitter<void>();

    constructor(private activatedRoute :ActivatedRoute,private userService :UserService,private router :Router, private organizationService:OrganizationService) {

    }

    ngOnInit() {

    }
    onLogin(){
        this.router.navigate(['/login']);
    }
    onSubmit(formulaire : NgForm){

        let pass = formulaire.controls['password'].value;
        let confirmPass = formulaire.controls['ConfirmPassword'].value;

        this.valid=pass == confirmPass;
        this.submitted=formulaire.valid &&  pass == confirmPass;
        if(!this.submitted)
            return  ;

        this.user.UserName=formulaire.controls['organizationName'].value;
        console.log(formulaire.controls['password'].value);
        this.user.email=formulaire.controls['organizationEmail'].value;
        this.user.password=formulaire.controls['password'].value;
        this.user.role=Role.Organization;
        console.log(this.user);

        this.organization.matricule=formulaire.controls['organizationRegistrationNumber'].value;
        this.organization.activity=formulaire.controls['organizationDomain'].value;
        console.log(this.organization)
        this.userService.create(this.user).subscribe(
            res=> console.log("test add user",res)
        )
        this.organizationService.create(this.organization).subscribe(
            res => console.log("organization added")
        )
    }


    reset(formulaire:NgForm){
        formulaire.resetForm();
    }


}
