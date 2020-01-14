import {Component, OnInit} from '@angular/core';
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-sponsor-profile',
    templateUrl: './sponsor-profile.component.html',
    styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

    sponsor = new Sponsor();

    constructor(private sponsorService: SponsorService,private route : ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params)=> {
            this.sponsorService.getSponsor(params.id).subscribe(
                sponsor => this.sponsor = sponsor)
        });
    }



}
