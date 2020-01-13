import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../models/organization";

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  constructor(private organizationService: OrganizationService,private route:ActivatedRoute) { }

  organization:Organization;
  ngOnInit() {
    this.organization = new Organization();
      this.route.params.subscribe((params)=> {
              this.organizationService.getOrganization(+params.id).subscribe(
                  (res) => {
                      this.organization=res;
                  }
              );
              console.log("id "+ params.id )
          }
      )
  }

}
