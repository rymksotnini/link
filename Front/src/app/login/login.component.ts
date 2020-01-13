import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Role} from "../../environments/environment";
import {User} from "../models/User";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit() {
  }

  submitted : boolean = false;
  user = new User();
  onSubmit(formulaire : NgForm) {

    console.log("dkhalt");
    this.submitted = formulaire.valid;
    if (!this.submitted)
      return;

    this.user.email = formulaire.controls['email'].value;
    this.user.password = formulaire.controls['password'].value;
    console.log(this.user);
    this.loginService.login(this.user).subscribe(
        result => {
          console.log("pleaassse");
          const token = result.body["token"];
          localStorage.setItem('token',token);
          this.router.navigate(['/'])},
        error => console.log(error)
    );


  }

  }
