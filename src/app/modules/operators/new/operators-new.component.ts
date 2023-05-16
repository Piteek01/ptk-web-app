import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { Operator } from 'src/app/core/interfaces/operator.interface';

import { DialogService } from 'src/app/core/services/dialog.service';
// import { OperatorService } from 'src/app/core/services/operator.service';

import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, HeaderAuthComponent, SideNavComponent, RouterLinkActive, RouterLink],
  templateUrl: './operators-new.component.html',
  styleUrls: ['../operators.component.scss']
})
export class OperatorsNewComponent implements OnInit {

  isChanged = false;
  moduleId = IModulesEnum.operators;

  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  constructor(
    private dialogService: DialogService,
    // private operatorService: OperatorService,
    ) {
  }

  ngOnInit() {


  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.isChanged) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


}
