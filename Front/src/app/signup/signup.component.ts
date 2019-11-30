import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    is_Organization : boolean;
    is_Sponsor: boolean;
    submitted : boolean = false;
    user = new User();

    constructor(private activatedRoute :ActivatedRoute,private userService :UserService) {
        activatedRoute.params.subscribe(parameters => {
            this.is_Organization= this.activatedRoute.snapshot.paramMap.get("type")=="organization";
            this.is_Sponsor= !this.is_Organization;
            console.log(" organization ? " +this.is_Organization +" sponsor ?"+this.is_Sponsor);



        });
    }

    ngOnInit() {

    }
    onSubmit(formulaire : NgForm){
        console.log("testing");
        let prefixType :string;
        this.submitted=formulaire.valid;
        if(!this.submitted)
            return  ;
        if(this.is_Organization){
             prefixType ="organization"
        }else if (this.is_Sponsor)
            prefixType="sponsor";
        this.user.UserName=formulaire.controls[prefixType+'Name'].value;
        console.log(formulaire.controls['password'].value);
        this.user.email=formulaire.controls[prefixType+'Email'].value;
        this.user.password=formulaire.controls['password'].value;
        this.user.is_organization=this.is_Organization;
        this.user.is_sponsor=this.is_Sponsor;
        console.log(this.user);
       // this.userService.create(this.user);

    }


    reset(formulaire:NgForm){
        formulaire.resetForm();
    }


}
