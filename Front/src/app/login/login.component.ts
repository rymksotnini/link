import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Role} from "../../environments/environment";
import {User} from "../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor() { }

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


  }

  }
