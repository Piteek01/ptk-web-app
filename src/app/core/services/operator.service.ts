import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiRoutesService } from './api-routes.service';
import { ApiService } from './api.service';
import { JwtTokenService } from 'src/app/core/services/jwt-token.service';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Operator } from 'src/app/core/interfaces/operator.interface';
import { HeaderTypesEnum } from '../enums/header-types.enum';
import { AppError } from '../interfaces/app-error.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject: BehaviorSubject<Operator | null> =
    new BehaviorSubject<Operator | null>(null);
  // private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private apiRoutesService: ApiRoutesService,
    private apiService: ApiService,
    private jwtTokenService: JwtTokenService,
    // private spinnerWrapperService: SpinnerWrapperService
  ) {}

  public get currentUser(): Operator {
    return this.currentUserSubject.value as Operator;
  }

  public set currentUser(user: Operator) {
    this.currentUserSubject.next(user);
  }

  getOperators(params: any): Observable<any> {
    // this.spinnerWrapperService.startLoading();

    return this.apiService
      .get(
        this.apiRoutesService.getRoutes().users.api(),
        params,
        HeaderTypesEnum.applicationJson
      )
      .pipe(
        // tap((response: any) => {
        //   return response; // {Users: []}
        // }),
        catchError((err: AppError) => {
          console.log('ERROR: ', err);
          // const feError: FeError = { message: err.message, status: err.status };
          return throwError(err);
        }),
        finalize(() => {
          // this.spinnerWrapperService.stopLoading();
        })
      );
  }

}
