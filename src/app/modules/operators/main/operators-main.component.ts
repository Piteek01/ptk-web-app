import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLinkActive, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { Operator } from 'src/app/core/interfaces/operator.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';
import { OperatorService } from 'src/app/core/services/operator.service';

@Component({
  selector: 'app-operators-main',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent, RouterLinkActive, RouterLink],
  templateUrl: './operators-main.component.html',
  styleUrls: ['./operators-main.component.scss']
})
export class OperatorsMainComponent implements OnInit, OnDestroy {

  operators!: Observable<Operator[]>;
  currentModule!: IModule;
  moduleId = IModulesEnum.operators;
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private featuresProvider: FeaturesProvider,
    private operatorService: OperatorService,
    private router: Router,
    private sideNavService: SideNavService
    ) {
  }

  ngOnInit() {
    this.operators = this.operatorService.getOperators(null);
    this.currentModule = this.featuresProvider.provide(this.moduleId);

    this.sideNavStatusSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      });
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

  onVoted(agreed: boolean) {
    if (agreed) {
    } else {}
  }

  goToDetail(operator: Operator) {
    const operatorId = operator? operator.id : null;

    this.router.navigate(['/detail', { id: operatorId }]);
  }

}
