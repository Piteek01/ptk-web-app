/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routes';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '-lang.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserModule, NgbModule, TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
