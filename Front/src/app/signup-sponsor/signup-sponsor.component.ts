import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {Role} from "../../environments/environment";

@Component({
  selector: 'app-signup-sponsor',
  templateUrl: './signup-sponsor.component.html',
  styleUrls: ['./signup-sponsor.component.scss']
})
export class SignupSponsorComponent implements OnInit {
  test : Date = new Date();

  submitted : boolean = false;
  user = new User();

  // @Output()
  // public Login: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService :UserService,private router :Router) {
    }


  ngOnInit() {

  }
  onLogin(){
    this.router.navigate(['/login']);
  }
  onSubmit(formulaire : NgForm){
    console.log("testing");
    this.submitted=formulaire.valid;
    if(!this.submitted)
      return  ;

    this.user.UserName=formulaire.controls['sponsorName'].value;
    console.log(formulaire.controls['password'].value);
    this.user.email=formulaire.controls['sponsorEmail'].value;
    this.user.password=formulaire.controls['password'].value;
    this.user.role=Role.Sponsor;

    console.log(this.user);
    // this.userService.create(this.user);
    this.userService.create(this.user).subscribe(
        res=> console.log("test add user",res)
    )


  }


  reset(formulaire:NgForm){
    formulaire.resetForm();
  }


}
