import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'app-market-main',
  templateUrl: './market-main.component.html',
  styleUrls: ['./market-main.component.scss']
})
export class MarketMainComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  moduleId = 'market';
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(private featuresProvider: FeaturesProvider, private sideNavService: SideNavService) {
  }

  ngOnInit() {
    this.currentModule = this.featuresProvider.provide(this.moduleId);
    this.sideNavStatusSubscription = this.sideNavService.getSideNavStatus().subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

}
