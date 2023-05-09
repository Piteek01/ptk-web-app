
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const getApiAccountsEndpoint = () => environment.apiAccountsEndpoint;
const getApiContactsEndpoint = () => environment.apiAccountsEndpoint;
const getApiRolesEndpoint = () => environment.apiAccountsEndpoint;
const getApiUsersEndpoint = () => environment.apiUsersEndpoint;

@Injectable({ providedIn: 'root' })
export class ApiRoutesService {
  getRoutes() {
    return {
      accounts: {
        api: () => `${getApiAccountsEndpoint()}`,
        rootUsers: () => `${getApiAccountsEndpoint()}`
      },
      loginCreds: {
        post: () => `${getApiUsersEndpoint()}/login-creds`
      },
      loginMfa: {
        post: () => `${getApiUsersEndpoint()}/login-mfa`
      },
      register: {
        post: () => `${getApiUsersEndpoint()}/register`
      },
      roles: {
        get: () => `${getApiUsersEndpoint()}`
      },
      contacts: {
        get: () => `${getApiContactsEndpoint()}`,
        getById: () => `${getApiContactsEndpoint()}`,
        post: () => `${getApiContactsEndpoint()}`
      },
      users: {
        api: () => `${getApiUsersEndpoint()}`
      }
    };
  }
}
