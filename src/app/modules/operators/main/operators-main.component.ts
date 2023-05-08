import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule } from '@ngx-translate/core';

// import { OperatorsRoutingModule } from './operators-routing.module';


import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-operators-main',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent],
  templateUrl: './operators-main.component.html',
  styleUrls: ['./operators-main.component.scss']
})
export class OperatorsMainComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  moduleId = 'dashboard';
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(private featuresProvider: FeaturesProvider, private sideNavService: SideNavService) {
  }

  ngOnInit() {
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

}
