import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;

  state = inject(Router);

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getDestinationUrl(): string {
    return this.state.routerState.snapshot.url.includes('/login') ? '/dashboard' :
      this.state.routerState.snapshot.url;
  }

  getToken(): string {
    return 'safasfsd'
  }
}
