import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  moduleId = 'dashboard';
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(private featuresProvider: FeaturesProvider, private sideNavService: SideNavService) { }

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
