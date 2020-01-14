import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {Role} from "../../environments/environment";
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";

@Component({
  selector: 'app-signup-sponsor',
  templateUrl: './signup-sponsor.component.html',
  styleUrls: ['./signup-sponsor.component.scss']
})
export class SignupSponsorComponent implements OnInit {
  test : Date = new Date();
  valid : boolean = true;

  submitted : boolean = false;
  user = new User();
  sponsor = new Sponsor();

  // @Output()
  // public Login: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService :UserService,private sponsorService: SponsorService, private router :Router) {
    }

  ngOnInit() {

  }
  onLogin(){
    this.router.navigate(['/login']);
  }
  onSubmit(formulaire : NgForm){
    console.log("testing");
    let pass = formulaire.controls['password'].value;
    let confirmPass = formulaire.controls['ConfirmPassword'].value;

    this.valid=pass == confirmPass;
    this.submitted=formulaire.valid &&  pass == confirmPass;
    if(!this.submitted)
      return  ;

    //User information
    this.user.UserName=formulaire.controls['sponsorName'].value;
    console.log(formulaire.controls['password'].value);
    this.user.email=formulaire.controls['sponsorEmail'].value;
    this.user.password=formulaire.controls['password'].value;
    this.user.role=Role.Sponsor;

    //Sponsor information
    this.sponsor.name = formulaire.controls['sponsorName'].value;
    this.sponsor.activity = formulaire.controls['activity'].value;
    this.sponsor.city = formulaire.controls['city'].value;
    this.sponsor.country = formulaire.controls['country'].value;
    this.sponsor.slogan = formulaire.controls['slogan'].value;
    this.sponsor.image = "./assets/img/sponsors/default-profile-sponsor.jpg";

    console.log(this.user);
    // this.userService.create(this.user);
    this.userService.create(this.user).subscribe(
        res=> console.log("test add user",res)
    )
  console.log(this.sponsor)
    this.sponsorService.addSponsor(this.sponsor).subscribe(
        res=> console.log("test add sponsor",res)
    )
  }

  reset(formulaire:NgForm){
    formulaire.resetForm();
  }


}
