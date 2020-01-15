import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {Organization} from "../models/organization";
import {LoginService} from "../services/login.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-manage-profile',
  templateUrl: './organization-manage-profile.component.html',
  styleUrls: ['./organization-manage-profile.component.css']
})
export class OrganizationManageProfileComponent implements OnInit {

  organization = new Organization();
    private image_file;
    private image_name;
  constructor(private organizationService:OrganizationService, private loginService:LoginService,private http : HttpClient, private router:Router) { }

  ngOnInit() {
      this.loginService.getCurrentUser().subscribe(
          (user) => {
              this.organizationService.getLoggedOrganization(user.body.id).subscribe(
                  (res) => this.organization = res
              )
          }
      )
  }

    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.image_file = file;
        }
    }

    save(){
        this.organization.image = this.image_name;
        this.organizationService.update(this.organization,this.organization.id).subscribe(
            res=> console.log("sponsor updated",res)
        )
    }

    submit(){
        const formData = new FormData();
        formData.append('file', this.image_file);

        this.http.post<any>('http://localhost:3000/file', formData).subscribe(
            (res) =>
            {
                this.image_name = res.name;
                this.save()
                this.router.navigate(['organization',this.organization.id])
            } ,
            (err) => console.log(err)
        );
    }

}
