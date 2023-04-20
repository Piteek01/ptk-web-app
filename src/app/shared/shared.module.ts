import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderAuthComponent } from './headers/auth/header-auth.component';


@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      RouterModule
    ],
    declarations: [
      HeaderAuthComponent
    ],
    exports: [
      HeaderAuthComponent
    ],
    entryComponents: [],
    providers: []
  })
  export class SharedModule {}
