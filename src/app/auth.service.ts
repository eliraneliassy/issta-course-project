import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private router: Router) { }

  getUser(): Observable<string> {
    return this.user$.asObservable();
  }

  setUser(user: string) {
    this.user$.next(user);
  }

  login(auth: { email: string, password: string }) {
    this.setUser(auth.email);
    this.router.navigateByUrl('/feed');
  }

  logout(){
    this.setUser(null);
  }
}
