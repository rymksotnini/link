import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {Organization} from "../models/organization";

@Component({
  selector: 'app-organization-manage-profile',
  templateUrl: './organization-manage-profile.component.html',
  styleUrls: ['./organization-manage-profile.component.css']
})
export class OrganizationManageProfileComponent implements OnInit {

  organization=new Organization();
  constructor(private organizationService:OrganizationService) { }

  ngOnInit() {
    this.organizationService.getOrganization(6).subscribe(
        (res) => this.organization = res
    )
  }

    save(){
        this.organizationService.update(this.organization,this.organization.id).subscribe(
            res=> console.log("sponsor updated",res)
        )
    }
}
