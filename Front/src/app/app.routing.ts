import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {EventsComponent} from "./events/events.component";
import {OrganizationsComponent} from "./organizations/organizations.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {SponsorProfileComponent} from "./sponsor-profile/sponsor-profile.component";
import {SponsorManageProfileComponent} from "./sponsor-manage-profile/sponsor-manage-profile.component";
import {SignupSponsorComponent} from "./signup-sponsor/signup-sponsor.component";
import {HomePageComponent} from "./home-page/home-page.component";

import {EventFormComponent} from "./event-form/event-form.component";
import {OrganizationProfileComponent} from "./organization-profile/organization-profile.component";
import {FileLoderComponent} from "./file-loder/file-loder.component";
import {OrganizationManageProfileComponent} from "./organization-manage-profile/organization-manage-profile.component";

const routes: Routes =[
    { path: 'file' , component: FileLoderComponent},
    { path: 'add',   component:    EventFormComponent},
    { path: 'homee',                          component: HomeComponent },
    { path: 'events',                        component: EventsComponent },
    { path: 'organizations',                 component: OrganizationsComponent },
    { path: 'sponsors',                      component: SponsorsComponent },
    { path: 'about-us',                      component: AboutUsComponent },
    { path: 'user-profile',                  component: ProfileComponent },
    {path: 'organization/:id',       component: OrganizationProfileComponent},
    { path: 'register/sponsor',              component: SignupSponsorComponent },
    { path: 'landing',                       component: LandingComponent },
    { path: 'sponsor-details/:id', component: SponsorProfileComponent},
    { path: 'sponsor-profile', component: SponsorProfileComponent},
    { path: 'sponsor-manage-profile', component: SponsorManageProfileComponent},
    { path: 'organization-manage-profile', component: OrganizationManageProfileComponent},
    { path: 'login',                         component: LoginComponent },
    { path: 'home', component: HomePageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,
        {    useHash: false,
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled'
        })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
