import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { SideNavProvider } from 'src/app/core/providers/side-nav.provider';

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

  constructor(private sideNavProvider: SideNavProvider) {
  }

  ngOnInit() {
    this.currentModule = this.sideNavProvider.provide(this.moduleId);
    this.sideNavStatusSubscription = this.sideNavProvider.getSideNavStatus().subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

}
