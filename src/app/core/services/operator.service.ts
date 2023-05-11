import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
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
export class OperatorService {
  private selectedOperatorSubject: BehaviorSubject<Operator | null> =
    new BehaviorSubject<Operator | null>(null);
  // private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private apiRoutesService: ApiRoutesService,
    private apiService: ApiService,
    private jwtTokenService: JwtTokenService,
    // private spinnerWrapperService: SpinnerWrapperService
  ) {}

  public get selectedOperator(): Operator | null {
    return this.selectedOperatorSubject.value as Operator;
  }

  public set currentUser(user: Operator) {
    this.selectedOperatorSubject.next(user);
  }

  getOperators(params: any): Observable<any> {
    // this.spinnerWrapperService.startLoading();

    if (params === null)
      return of([
        { id: "j8P9sz", firstName: "First 1", lastName: "Last 1", email: "email1" },
        { id: "tMot06", firstName: "First 2", lastName: "Last 2", email: "email2" },
        { id: "x9sD3g", firstName: "First 3", lastName: "Last 3", email: "email3" },
      ]);

    return this.apiService
      .get(
        this.apiRoutesService.getRoutes().operators.api(),
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

  getOperator(params: any): Observable<any> {
    // this.spinnerWrapperService.startLoading();

    if (params)
      this.selectedOperatorSubject.next({ id: params, firstName: "First 1", lastName: "Last 1", email: "email1", username: 'abc' })
      return this.selectedOperatorSubject;

    // return this.apiService
    //   .get(
    //     this.apiRoutesService.getRoutes().users.api(),
    //     params,
    //     HeaderTypesEnum.applicationJson
    //   )
    //   .pipe(
    //     // tap((response: any) => {
    //     //   return response; // {Users: []}
    //     // }),
    //     catchError((err: AppError) => {
    //       console.log('ERROR: ', err);
    //       // const feError: FeError = { message: err.message, status: err.status };
    //       return throwError(err);
    //     }),
    //     finalize(() => {
    //       // this.spinnerWrapperService.stopLoading();
    //     })
    //   );
  }

}
