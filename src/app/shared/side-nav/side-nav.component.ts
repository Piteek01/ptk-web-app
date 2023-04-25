import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
// import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideNavProvider } from 'src/app/core/providers/side-nav.provider';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  @Input() currentModule!: IModule;

  constructor(private sideNavProvider: SideNavProvider) {}

  ngOnInit() {
    this.sideNavStatusSubscription = this.sideNavProvider.getSideNavStatus().subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  setNavbarWidth() {
    this.sideNavProvider.setSideNavStatus(this.sideNavStatus === 1 ? 2 : 1);
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe()
  }

}
