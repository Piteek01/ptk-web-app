import {inject} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { IModulesEnum } from '../enums/imodules.enum';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  const token = authService.getToken();

  const navigationExtras: NavigationExtras = {
    queryParams: { token: token }
  }

  // Redirect to the login page
  return router.createUrlTree([`/${IModulesEnum.login}`], navigationExtras);
};
