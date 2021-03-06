import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "./services/login.service";
import {Role} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrganizerRoleGuard implements CanActivate {

    currentUserRole : any = Role.simple ;
    constructor(private router: Router,
                private LoginService: LoginService){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("I m in guard Role !")
        this.LoginService.getCurrentUser().subscribe((user)=> {
            this.currentUserRole = user.body.role;
            console.log(this.currentUserRole);
            console.log(Role.Organization);
            console.log(typeof (this.currentUserRole+""))
            console.log(this.currentUserRole+""=="Organization")
        })
        console.log(this.currentUserRole+""=="Organization")
        return (this.currentUserRole+""=="Organization");

    }
}
