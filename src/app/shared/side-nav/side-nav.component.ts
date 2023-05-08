import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Location, NgClass, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd, RouterLinkActive, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, startWith, tap } from 'rxjs/operators';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
// import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, FontAwesomeModule, NgFor, RouterLinkActive, RouterLink, TranslateModule]
})
export class SideNavComponent implements OnInit, OnDestroy {

  _currentModule!: IModule;
  currentRoute: string = '';
  isActiveFeature: boolean = false;
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

  constructor(private sideNavService: SideNavService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      // this.router.events.subscribe(() => {
      // this.isActiveFeature = this.location.path().substring(1, this.location.path().indexOf('/', 1) === -1 ?
      //   this.location.path().length : this.location.path().indexOf('/', 1));
      // });
      // this.router.events.pipe(
      //   filter(e => e instanceof NavigationEnd),
      //   startWith(this.router)).
      //   subscribe((event: any) => {
      //     const routes = event.url.toLowerCase().split('/');
      //     const currentRoute = routes[1];
      //     console.log(event.url);
      //     })
    }


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

    this.currentRoute = this.activatedRoute.snapshot.url.length ?
      this.activatedRoute.snapshot.url[0].path : '/';
  }

  // isLinkActive(path: string): boolean {
  //   // console.log(this.sideNavStatus);
  //   // console.log(this._currentModule && this.currentModule?.features && this.currentModule?.features?.length);
  //   return path === this.currentRoute;
  // }

  setNavbarWidth() {
    this.sideNavService.setSideNavStatus(this.sideNavStatus === 1 ? 2 : 1);

    // this.voted.emit(true);
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe()
  }

}
