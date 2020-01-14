import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {Organization} from "../models/organization";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-organization-manage-profile',
  templateUrl: './organization-manage-profile.component.html',
  styleUrls: ['./organization-manage-profile.component.css']
})
export class OrganizationManageProfileComponent implements OnInit {

  organization = new Organization();
  constructor(private organizationService:OrganizationService, private loginService:LoginService) { }

  ngOnInit() {
      this.loginService.getCurrentUser().subscribe(
          (user) => {
              this.organizationService.getLoggedOrganization(user.body.id).subscribe(
                  (res) => this.organization = res
              )
          }
      )
  }

    save(){
        this.organizationService.update(this.organization,this.organization.id).subscribe(
            res=> console.log("sponsor updated",res)
        )
    }
}
