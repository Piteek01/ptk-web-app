import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


import { HeaderAuthComponent } from './headers/auth/header-auth.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    imports: [
      CommonModule,
      FontAwesomeModule,
      NgbModule,
      RouterModule,
      TranslateModule
    ],
    declarations: [
      HeaderAuthComponent,
      SideNavComponent
    ],
    exports: [
      HeaderAuthComponent,
      SideNavComponent,
      TranslateModule
    ],
    entryComponents: [],
    providers: []
  })
  export class SharedModule {}
