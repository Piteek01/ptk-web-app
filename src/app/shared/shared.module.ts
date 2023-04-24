import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderAuthComponent } from './headers/auth/header-auth.component';
import { PageActionsAuthComponent } from './page-actions/page-actions-auth/page-actions-auth.component';

@NgModule({
    imports: [
      CommonModule,
      FontAwesomeModule,
      NgbModule,
      RouterModule
    ],
    declarations: [
      HeaderAuthComponent,
      PageActionsAuthComponent
    ],
    exports: [
      HeaderAuthComponent,
      PageActionsAuthComponent
    ],
    entryComponents: [],
    providers: []
  })
  export class SharedModule {}
