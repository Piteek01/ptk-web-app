
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const getApiAccountsEndpoint = () => environment.apiAccountsEndpoint;
const getApiContactsEndpoint = () => environment.apiAccountsEndpoint;
const getApiOperatorsEndpoint = () => environment.apiUsersEndpoint;
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
      operators: {
        api: () => `${getApiOperatorsEndpoint()}`
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
