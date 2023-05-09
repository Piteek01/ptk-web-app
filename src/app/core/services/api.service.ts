import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { AppError } from '../interfaces/app-error.interface';
import { HeaderTypesEnum } from '../enums/header-types.enum';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T, Q = unknown>(
    url: string,
    queryParams?: Q,
    accept?: HeaderTypesEnum
  ): Observable<T> {
    return this.httpClient
      .get<T>(url, {
        headers: this.getDefaultRequestOptions(accept),
        params: queryParams as any
      })
      .pipe(
        catchError(() => {
          return throwError(this.handleErrors);
        })
      );
  }

  post<T>(
    url: string,
    data: any,
    accept: HeaderTypesEnum,
    contentType?: HeaderTypesEnum
  ): Observable<HttpResponse<T>> {
    let headers = new HttpHeaders();
    // const token = sessionStorage.getItem('token');

    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append(
      'content-type',
      contentType || HeaderTypesEnum.applicationJson
    );
    headers = headers.append('accept', accept);

    // if (!(token == null || token == '')) {
    //   headers = headers.append('x-auth-token', token);
    // }

    return this.httpClient
      .post<T>(url, data, {
        headers,
        observe: 'response'
      })
      .pipe(
        catchError(() => {
          return throwError(of(this.handleErrors));
        })
      );
  }

  private getDefaultRequestOptions(
    accept?: HeaderTypesEnum
  ): HttpHeaders | { [header: string]: string | string[] } {
    const headers: { [name: string]: string | string[] } = {
      accept: accept || HeaderTypesEnum.applicationJson
    };

    return headers;
  }

  private handleErrors(errorHttpResponse: HttpErrorResponse): AppError {
    const apiErrorResponse: AppError = {};

    if (
      errorHttpResponse.headers &&
      errorHttpResponse.headers.get('Content-Type') ===
        HeaderTypesEnum.applicationJson
    ) {
      apiErrorResponse.error = JSON.parse(errorHttpResponse.error);
      apiErrorResponse.headers = errorHttpResponse.headers;
      apiErrorResponse.message = errorHttpResponse.message;
      apiErrorResponse.name = errorHttpResponse.name;
      apiErrorResponse.ok = errorHttpResponse.ok;
      apiErrorResponse.status = errorHttpResponse.status;
      apiErrorResponse.statusText = errorHttpResponse.statusText;
      apiErrorResponse.type = errorHttpResponse.type;
      apiErrorResponse.url = errorHttpResponse.url || '';
    } else {
      apiErrorResponse.message = errorHttpResponse.toString();
      apiErrorResponse.status = 400;
    }

    return apiErrorResponse;
  }
}
