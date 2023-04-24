import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideNavProvider } from 'src/app/core/providers/side-nav.provider';

@Component({
  selector: 'app-market-main',
  templateUrl: './market-main.component.html',
  styleUrls: ['./market-main.component.scss']
})
export class MarketMainComponent implements OnInit, OnDestroy {

  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  constructor(private sideNavProvider: SideNavProvider) {
  }

  ngOnInit() {
    this.sideNavStatusSubscription = this.sideNavProvider.getSideNavStatus().subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  // setPageContentsWidth() {
  //   switch(this.pageActionsStatus) {
  //     case 0:
  //       this.pageContentsWidth = '0';
  //       break;
  //     case 1:
  //       this.pageContentsWidth = 'wide-width';
  //   }
  // }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

}
