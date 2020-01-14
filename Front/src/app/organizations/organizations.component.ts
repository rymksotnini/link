import {Component, OnInit} from '@angular/core';
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
          console.log(organizations[0].name);
          this.organizations = organizations
        }
    )
  }

  delete(organization: Organization){
          const index = this.organizations.indexOf(organization, 0);
          if (index > -1) {
              this.organizations.splice(index, 1);
          }
      this.organizationService.delete(organization.id).subscribe(
          (res) => {
              console.log("delete done: "+ organization.id)
          }
      );
  }
}
