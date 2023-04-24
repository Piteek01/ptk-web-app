import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarProvider } from 'src/app/core/providers/navbar.provider';

@Component({
  selector: 'app-market-main',
  templateUrl: './market-main.component.html',
  styleUrls: ['./market-main.component.scss']
})
export class MarketMainComponent implements OnInit {

  navbarStatus = 1;
  navbarSubscription!: Subscription;

  constructor(private navbarProvider: NavbarProvider) {
  }

  ngOnInit() {
    this.navbarSubscription = this.navbarProvider.getNavbarStatus().subscribe(
      value => {
        this.navbarStatus = value;
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

}
