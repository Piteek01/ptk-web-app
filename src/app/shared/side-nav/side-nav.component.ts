import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
// import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  _currentModule!: IModule;
  sideNavStatus = 1;
  sideNavSubscription!: Subscription;

  // @Input() currentModule!: IModule;

  @Input()
    get currentModule(): IModule { return this._currentModule; }
    set currentModule(currentModule: IModule) {
      this._currentModule = (currentModule) || { title: '<no name set>' };
      this._currentModule.title = this._currentModule.title.trim();
    }

  @Output() voted = new EventEmitter<boolean>();

  constructor(private sideNavService: SideNavService) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   const log: string[] = [];
  //   for (const propName in changes) {
  //     const changedProp = changes[propName];
  //     const to = JSON.stringify(changedProp.currentValue);
  //     if (changedProp.isFirstChange()) {
  //       log.push(`Initial value of ${propName} set to ${to}`);
  //     } else {
  //       const from = JSON.stringify(changedProp.previousValue);
  //       log.push(`${propName} changed from ${from} to ${to}`);
  //     }
  //   }
  //   this.changeLog.push(log.join(', '));
  // }

  ngOnInit() {
    this.sideNavSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      }
    );
  }

  setNavbarWidth() {
    this.sideNavService.setSideNavStatus(this.sideNavStatus === 1 ? 2 : 1);

    // this.voted.emit(true);
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe()
  }

}
