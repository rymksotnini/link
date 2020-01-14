import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {SignUpPopupComponent} from "../../sign-up-popup/sign-up-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isConnected :boolean = false;

    constructor(public location: Location, private router: Router , private matDialog : MatDialog,private loginService : LoginService ) {
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
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });

    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
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
            if(value.asOrganizer==true)
                this.router.navigate(['/register/organization']);
            else if (value.asOrganizer==false)
                this.router.navigate(['/register/sponsor']);

        });
    }
}
