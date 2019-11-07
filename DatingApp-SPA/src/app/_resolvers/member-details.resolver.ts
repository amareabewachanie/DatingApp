import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class MemberDetailsResolver implements Resolve<User> {
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(+route.params['id']).pipe(
            catchError(error=>{
                this.alertify.error('Problem when retrieving the data, Please try again soon!');
                this.router.navigate(['/memebers']);
                return of(null);
            })
        );
    }

    constructor(private userService:UserService,private router:Router,private alertify:AlertifyService) { }
}