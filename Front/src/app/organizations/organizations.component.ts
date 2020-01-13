import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {Organization} from "../models/organization";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  organizations:Organization[];
  constructor(private organizationService:OrganizationService) { }

  ngOnInit() {
    this.organizationService.getAll().subscribe(
        (organizations) => {
          console.log(organizations);
          this.organizations = organizations
        }
    )
  }

}
