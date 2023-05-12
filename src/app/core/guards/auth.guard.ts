import {inject} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { IModulesEnum } from '../enums/imodules.enum';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl(`/${IModulesEnum.login}`);
};
