import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {Role} from "../../environments/environment";
import {Organization} from "../models/organization";
import {OrganizationService} from "../services/organization.service";
import {LoginService} from "../services/login.service";

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

    constructor(private activatedRoute :ActivatedRoute,private userService :UserService,private router :Router, private organizationService:OrganizationService,private loginService:LoginService) {

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
        this.organization.name=formulaire.controls['organizationName'].value;
        this.organization.matricule=formulaire.controls['organizationRegistrationNumber'].value;
        this.organization.activity=formulaire.controls['organizationDomain'].value;
        this.organization.city=formulaire.controls['organizationCity'].value;
        this.organization.country=formulaire.controls['organizationCountry'].value;
        this.organization.slogan=formulaire.controls['organizationSlogan'].value;
        this.organization.image = "./assets/img/icons/common/organizer.png";
        this.organization.user = this.user;
        console.log(this.organization);

        this.organizationService.create(this.organization).subscribe((res)=>
        {

            console.log("organization added")
            this.loginService.signUp(this.user).subscribe(
                result => {

                    const token = result.body["token"];
                    var obj = [{'token': token}, {'user': this.user.email}]
                    localStorage.setItem('obj', JSON.stringify(obj));
                    this.router.navigate(['/'])
                },
                error => console.log(error))
        }
        )

    }


    reset(formulaire:NgForm){
        formulaire.resetForm();
    }


}
