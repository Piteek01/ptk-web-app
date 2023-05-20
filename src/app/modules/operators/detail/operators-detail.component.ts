import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { Operator } from 'src/app/core/interfaces/operator.interface';

import { DialogService } from 'src/app/core/services/dialog.service';
// import { OperatorService } from 'src/app/core/services/operator.service';

import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent],
  templateUrl: './operators-detail.component.html',
  styleUrls: ['../operators.component.scss']
})
export class OperatorsDetailComponent implements OnInit {

  currentModule!: IModule;
  isChanged = false;
  selectedOperator!: Operator;
  operatorTab = {
    profile: true,
    licenses: false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    // private operatorService: OperatorService,
    ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.selectedOperator = data['operator'];
    });

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
