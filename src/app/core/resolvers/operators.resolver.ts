import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, Router} from '@angular/router';
import {EMPTY, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import { IModulesEnum } from '../enums/imodules.enum';
import { Operator } from '../interfaces/operator.interface';
import { OperatorService } from '../services/operator.service';

export const operatorDetailResolver: ResolveFn<Operator> = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const operatorService = inject(OperatorService);
  const id = route.paramMap.get('id')!;

  return operatorService.getOperator(id).pipe(mergeMap(operator => {
    if (operator) {
      return of(operator);
    } else {  // id not found
      router.navigate([`/${IModulesEnum.operators}`]);
      return EMPTY;
    }
  }));
}
