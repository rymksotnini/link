import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { CarouselForEventsComponent } from './carousel-for-events/carousel-for-events.component';
import {CarouselModule} from "ngx-carousel-lib";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpPopupComponent } from './sign-up-popup/sign-up-popup.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopSponsorsComponent } from './top-sponsors/top-sponsors.component';
import { SponsorProfileComponent } from './sponsor-profile/sponsor-profile.component';
import { SponsorManageProfileComponent } from './sponsor-manage-profile/sponsor-manage-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupSponsorComponent } from './signup-sponsor/signup-sponsor.component';

import { EventFormComponent } from './event-form/event-form.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { FileLoderComponent } from './file-loder/file-loder.component';
import {MatListModule} from '@angular/material/list';
import { StripeCardComponent } from './stripe-card/stripe-card.component';
import { OrganizationManageProfileComponent } from './organization-manage-profile/organization-manage-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    UpcomingEventComponent,
    CarouselForEventsComponent,
    LoginComponent,
    SignUpPopupComponent,
    EventsComponent,
    SponsorsComponent,
    OrganizationsComponent,
    AboutUsComponent,
    TopSponsorsComponent,
    SponsorProfileComponent,
    SponsorManageProfileComponent,
    HomePageComponent,
    SignupSponsorComponent,
    EventFormComponent,
    OrganizationProfileComponent,
    FileLoderComponent,
    StripeCardComponent,
    OrganizationProfileComponent,
    OrganizationManageProfileComponent
  ],
  imports: [
    BrowserModule,
      CarouselModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatListModule

],
  providers: [],
  entryComponents: [SignUpPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
