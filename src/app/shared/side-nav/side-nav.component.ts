import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
// import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  sideNavStatus = 1;
  sideNavSubscription!: Subscription;

  @Input() currentModule!: IModule;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit() {
    this.sideNavSubscription = this.sideNavService.getSideNavStatus().subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  setNavbarWidth() {
    this.sideNavService.setSideNavStatus(this.sideNavStatus === 1 ? 2 : 1);
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe()
  }

}
