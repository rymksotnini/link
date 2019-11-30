import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

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
    focus;
    focus1;
    focus2;

    constructor(private activatedRoute :ActivatedRoute) {
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
        console.log(formulaire.value);
        this.submitted=formulaire.valid;

    }


}
