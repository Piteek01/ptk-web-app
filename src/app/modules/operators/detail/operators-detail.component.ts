import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { Operator } from 'src/app/core/interfaces/operator.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { OperatorService } from 'src/app/core/services/operator.service';
import { SideNavService } from 'src/app/core/services/side-nav.service';

import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent],
  templateUrl: './operators-detail.component.html',
  styleUrls: ['./operators-detail.component.scss']
})
export class OperatorsDetailComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  moduleId = IModulesEnum.operators;
  selectedOperator!: Observable<Operator>;
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private featuresProvider: FeaturesProvider,
    private operatorService: OperatorService,
    private sideNavService: SideNavService,
    private router: Router
    ) {
  }

  ngOnInit() {
    const operatorId = this.activatedRoute.snapshot.paramMap.get('id');

    this.selectedOperator = this.operatorService.getOperator(operatorId);

    this.currentModule = this.featuresProvider.provide(this.moduleId);

    this.sideNavStatusSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      });
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

}
