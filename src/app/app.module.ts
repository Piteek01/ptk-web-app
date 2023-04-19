import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircle,faSquare,farCircle,farSquare
          ,faStackOverflow,faGithub,faMedium);
  }
}
