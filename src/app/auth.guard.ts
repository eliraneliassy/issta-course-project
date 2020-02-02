import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const loginRoute: UrlTree = this.router.parseUrl('/auth/login');

    return this.authService.getUser().pipe(
      switchMap((user: string) => {
        if (user) {
          return of(true);
        }
        return of(loginRoute);

      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.getUser().pipe(
      switchMap((user: string) => {
        if (user) {
          return of(true);
        }
        this.router.navigateByUrl('/auth/login');

      })
    );
  }

}
