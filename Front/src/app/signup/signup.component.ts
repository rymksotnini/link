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
    is_User: boolean;
    focus;
    focus1;
    focus2;

    constructor(private activatedRoute :ActivatedRoute) {
        activatedRoute.params.subscribe(parameters => {
            this.is_Organization= this.activatedRoute.snapshot.paramMap.get("type")=="organization";
            this.is_User= !this.is_Organization;
            console.log(" organization ? " +this.is_Organization +" sponsor ?"+this.is_User);



        });
    }

    ngOnInit() {

    }
    onSubmit(formulaire : NgForm){}


}
