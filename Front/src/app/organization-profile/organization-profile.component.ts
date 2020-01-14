import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from "../models/organization";
import {LoginService} from "../services/login.service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

    userConnected:boolean;
    organization:Organization;
    imageUrl : any ;

  constructor(private router:Router ,private organizationService: OrganizationService,private route:ActivatedRoute, private loginService:LoginService,
              private http : HttpClient,
              private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.organization = new Organization();
      this.route.params.subscribe((params)=> {
              this.organizationService.getOrganization(+params.id).subscribe(
                  (res) => {
                      this.organization=res;
                      this.getImage(this.organization);
                  });
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
                      })
              }),
              console.log("id "+ params.id )
          }
      )
  }

    getImage(organization : Organization)
    {
        this.http.get("http://localhost:3000/download/" + organization.image, { responseType: "blob" })
            .toPromise()
            .then((blob) => {
                this.imageUrl= URL.createObjectURL(blob);
                organization.image = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl)
            })
            .catch(err => console.error("download error = ", err))
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
