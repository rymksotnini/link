import { Component, OnInit } from '@angular/core';
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";
import {NgForm} from "@angular/forms";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-sponsor-manage-profile',
  templateUrl: './sponsor-manage-profile.component.html',
  styleUrls: ['./sponsor-manage-profile.component.css']
})
export class SponsorManageProfileComponent implements OnInit {

  sponsor = new Sponsor();

  constructor(private sponsorService : SponsorService) { }

  ngOnInit() {
    this.sponsorService.getSponsor(7)
        .subscribe(sponsor => this.sponsor = sponsor);
    console.log(this.sponsor);
  }

  save(){
    this.sponsorService.updateSponsor(this.sponsor).subscribe(
        res=> console.log("sponsor updated",res)
    )
  }
}
