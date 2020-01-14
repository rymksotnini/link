import { Component, OnInit } from '@angular/core';
import {SponsorService} from "../services/sponsor.service";
import {Sponsor} from "../models/Sponsor";

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors : Sponsor[];

  constructor(private sponsorService: SponsorService) {
  }

  ngOnInit() {
    this.sponsorService.getSponsors().subscribe(
        (sponsors) => {
          console.log(sponsors);
          this.sponsors = sponsors
        }
    )
  }

}
