import {Component, OnInit} from '@angular/core';
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../services/login.service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-sponsor-profile',
    templateUrl: './sponsor-profile.component.html',
    styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

    sponsor = new Sponsor();
    loggedSponsor = new Sponsor();
    isCurrentUser: boolean;
    imageUrl : any ;

    constructor(private sponsorService: SponsorService,
                private route: ActivatedRoute,
                private loginService: LoginService,
                private http : HttpClient,
                private sanitizer : DomSanitizer) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.sponsorService.getSponsor(params.id).subscribe((sponsor) => {
                this.sponsor = sponsor;
                this.loginService.getCurrentUser().subscribe((user) => {
                    this.sponsorService.getSponsorByUserId(user.body.id).subscribe((res) => {
                        this.loggedSponsor = res;
                        console.log(this.loggedSponsor);
                        if (this.loggedSponsor.id == this.sponsor.id) {
                            this.isCurrentUser = true;
                            console.log(this.isCurrentUser);
                        } else {
                            this.isCurrentUser = false;
                        }
                    })
                });
                this.getImage(this.sponsor);
            })
        });
    }

    getImage(sponsor : Sponsor)
    {
        this.http.get("http://localhost:3000/download/" + sponsor.image, { responseType: "blob" })
            .toPromise()
            .then((blob) => {
                this.imageUrl= URL.createObjectURL(blob);
                sponsor.image = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl)
            })
            .catch(err => console.error("download error = ", err))
    }
}