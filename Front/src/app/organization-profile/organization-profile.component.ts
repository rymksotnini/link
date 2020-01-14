import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from "../models/organization";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  constructor(private router:Router ,private organizationService: OrganizationService,private route:ActivatedRoute, private loginService:LoginService) { }
  userConnected:boolean;
  organization:Organization;
  ngOnInit() {
    this.organization = new Organization();
      this.route.params.subscribe((params)=> {
              this.organizationService.getOrganization(+params.id).subscribe(
                  (res) => {
                      this.organization=res;
                  }
              );
          this.loginService.getCurrentUser().subscribe(
              (user) => {
                  this.organizationService.getLoggedOrganization(user.body.id).subscribe(
                      (res) => {
                          if (res.id == +params.id){
                              this.userConnected = true;
                          }
                          else{
                              this.userConnected =false;
                          }
                      }
                  )
              }
          )
              console.log("id "+ params.id )
          }
      )
  }

  deleteMyself(){
      this.loginService.getCurrentUser().subscribe(
          (user) => {
              this.organizationService.deleteMyself(user.body.id).subscribe(
                  (res)=> {
                      this.router.navigate(['home']);
                  }
              );
          }
      )
  }

}
