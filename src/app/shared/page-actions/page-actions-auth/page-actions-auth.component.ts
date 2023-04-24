import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavbarProvider } from 'src/app/core/providers/navbar.provider';

@Component({
  selector: 'page-actions-auth',
  templateUrl: './page-actions-auth.component.html',
  styleUrls: ['./page-actions-auth.component.scss']
})
export class PageActionsAuthComponent implements OnInit, OnDestroy {

  navbarWidth = '2.8em';
  navbarStatus = 3;
  navbarSubscription!: Subscription;
  @Input() name: string = '';

	// constructor(public activeOffcanvas: NgbActiveOffcanvas) {}

  constructor(private navbarProvider: NavbarProvider) {}

  ngOnInit() {
    this.navbarSubscription = this.navbarProvider.getNavbarStatus().subscribe(
      value => {
        this.navbarStatus = value;
      }
    );

    // this.isTabletPortrait$ = this.breakpointObserver
    //   .observe(Breakpoints.TabletPortrait)
    //   .pipe(
    //     map((result) => result.matches),
    //     shareReplay()
    //   );
  }

  setNavbarWidth() {
    // this.navbarStatus = this.navbarStatus === 1 ? 2 : 1;
    this.navbarProvider.setNavbarStatus(this.navbarStatus === 1 ? 2 : 1);
  }

  ngOnDestroy() {
    this.navbarSubscription.unsubscribe()
  }

}
