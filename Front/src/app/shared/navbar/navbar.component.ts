import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Location, PopStateEvent} from '@angular/common';
import {SignUpPopupComponent} from "../../sign-up-popup/sign-up-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";
import {Role} from "../../../environments/environment";
import {Subject} from "rxjs";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isConnected: boolean = false;
    userConnected: string;
    public isOrganizer: boolean;
    public isSponsor: boolean;
    refresh: Subject<any> = new Subject();
    mySubscription: any;


    constructor(public location: Location, private router: Router, private matDialog: MatDialog, private loginService: LoginService) {

    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });

        this.updateCurrentUser();
        this.loginService.refresh.subscribe(() =>{
            this.updateCurrentUser()}
        );





    }

    updateCurrentUser() {
        this.loginService.getCurrentUser().subscribe((user) => {
            if (user) {
                this.userConnected = user.body.UserName;
                this.isSponsor = user.body.role + "" == "Sponsor";
                this.isOrganizer = user.body.role + "" == "Organization";
            }
        });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        } else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        } else {
            return false;
        }
    }

    openDialog() {
        console.log("working");

        let dialogRef = this.matDialog.open(SignUpPopupComponent, {
            height: '400px',
            width: '600px',
            panelClass: 'myapp-no-padding-dialog',

        });
        const sub = dialogRef.componentInstance.onClick.subscribe((value) => {
            console.log(value);
            if (value.asOrganizer == true)
                this.router.navigate(['/register/organization']);
            else if (value.asOrganizer == false)
                this.router.navigate(['/register/sponsor']);

        });
    }

    logout() {
        this.loginService.logout();
        this.isOrganizer = false;
        this.isSponsor = false;
    }
}
