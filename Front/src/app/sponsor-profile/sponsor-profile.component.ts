import {Component, OnInit} from '@angular/core';
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";

@Component({
    selector: 'app-sponsor-profile',
    templateUrl: './sponsor-profile.component.html',
    styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

    sponsor = new Sponsor();

    constructor(private sponsorService: SponsorService) {
    }

    ngOnInit() {
        this.sponsorService.getSponsor(6)
            .subscribe(sponsor => this.sponsor = sponsor);
        console.log(this.sponsor);
    }



}
