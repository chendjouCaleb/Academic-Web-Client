import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ConnectionService } from './connection-service';
import { Injectable } from '@angular/core';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate{
    constructor(private _authService: ConnectionService, private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this._authService.isAthenticated){
            this._router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
}

@Injectable()
export class IsNotAuthenticatedGuard implements CanActivate{
    constructor(private _authService: ConnectionService, private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this._authService.isAthenticated){

            if(history.length > 0){
                history.back();
            }else{
                this._router.navigateByUrl("/home");
            }
            return false;
        }
        return true;
    }
}

