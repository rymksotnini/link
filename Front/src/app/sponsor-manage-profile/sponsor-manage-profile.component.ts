import {Component, OnInit} from '@angular/core';
import {Sponsor} from "../models/Sponsor";
import {SponsorService} from "../services/sponsor.service";
import {NgForm} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sponsor-manage-profile',
    templateUrl: './sponsor-manage-profile.component.html',
    styleUrls: ['./sponsor-manage-profile.component.css']
})
export class SponsorManageProfileComponent implements OnInit {

    sponsor = new Sponsor();
    loggedSponsor = new Sponsor();
    private image_file;
    private image_name;
    flag: boolean = false;

    constructor(private sponsorService: SponsorService,
                private loginService: LoginService,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit() {
        this.loginService.getCurrentUser().subscribe((user) => {
            this.sponsorService.getSponsorByUserId(user.body.id).subscribe((res) => {
                this.loggedSponsor = res;
                this.sponsorService.getSponsor(this.loggedSponsor.id)
                    .subscribe((sponsor) => this.sponsor = sponsor);
            })
        });
    }

    selectImage(event) {
        this.flag = true;
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.image_file = file;
        }
    }

    submit() {
        if (this.flag) {
            const formData = new FormData();
            formData.append('file', this.image_file);

            this.http.post<any>('http://localhost:3000/file', formData).subscribe(
                (res) => {
                    this.image_name = res.name;
                    this.save()
                },
                (err) => console.log(err)
            );
        } else {
            this.save();
        }
    }

    save() {
        this.sponsor.image = this.image_name;
        this.sponsorService.updateSponsor(this.sponsor).subscribe(
            (res) => {
                console.log("sponsor updated", res);
            });
        this.router.navigate(['/sponsor-details', this.sponsor.id])
            .then(e => {
                if (e) {
                    console.log("Navigation is successful!");
                } else {
                    console.log("Navigation has failed!");
                }
            })


    }



}
