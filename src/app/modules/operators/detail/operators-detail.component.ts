import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { Operator } from 'src/app/core/interfaces/operator.interface';
import { OperatorService } from 'src/app/core/services/operator.service';

import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent],
  templateUrl: './operators-detail.component.html',
  styleUrls: ['./operators-detail.component.scss']
})
export class OperatorsDetailComponent implements OnInit {

  currentModule!: IModule;
  moduleId = IModulesEnum.operators;
  selectedOperator!: Observable<Operator>;
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private operatorService: OperatorService,
    ) {
  }

  ngOnInit() {
    const operatorId = this.activatedRoute.snapshot.paramMap.get('id');

    this.selectedOperator = this.operatorService.getOperator(operatorId);

  }


}
