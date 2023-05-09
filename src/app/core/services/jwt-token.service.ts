import { Injectable } from '@angular/core';
import { isArray } from 'lodash';
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class JwtTokenService {
  constructor() {}

  getDecodedToken(): { [key: string]: string } | null {
    let decodedToken = this.getToken();

    if (decodedToken) {
      return jwt_decode(decodedToken);
    }

    return null;
  }

  getUserRoles(): Number[] {
    const decodedToken = this.getDecodedToken();

    if (decodedToken) {
      const result = [
        ...decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ]
      ];
      return result.map((x) => Number(x));
    }

    return [];
  }

  getSubscriptions(): Number[] {
    const decodedToken = this.getDecodedToken();

    if (decodedToken) {
      const result = [
        ...decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
        ]
      ];
      return result.map((x) => Number(x));
    }

    return [];
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const expiryTime: number = Number(this.getExpiryTime());

    if (expiryTime) {
      return 1000 * expiryTime < new Date().getTime();
    } else {
      return true;
    }
  }

  removeTokens(): void {
    sessionStorage.clear();
  }

  storeToken(authToken: any) {
    sessionStorage.setItem('token', JSON.stringify(authToken));
    // sessionStorage.setItem('token', authToken);
  }

  private getExpiryTime() {
    const decodedToken = this.getDecodedToken();

    return decodedToken
      ? decodedToken.exp
      : new Date().setFullYear(new Date().getFullYear() - 1);
  }
}
