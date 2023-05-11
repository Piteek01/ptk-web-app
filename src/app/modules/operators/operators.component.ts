import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';


import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { Operator } from 'src/app/core/interfaces/operator.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent,
    RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit, OnDestroy {

  operators!: Observable<Operator[]>;
  currentModule!: IModule;
  moduleId = IModulesEnum.operators;
  selectedOperator!: Operator | null;
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(

    private featuresProvider: FeaturesProvider,

    private router: Router,
    private sideNavService: SideNavService
    ) {
  }

  ngOnInit() {
    this.currentModule = this.featuresProvider.provide(this.moduleId);

    this.sideNavStatusSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      });
  }

  ngOnDestroy() {

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
