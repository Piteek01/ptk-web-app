import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subscription, map } from 'rxjs';


import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-summary',
  standalone: true,
  imports: [
    CommonModule, TranslateModule,
    HeaderAuthComponent,
    SideNavComponent
  ],
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  moduleId = 'dashboard';
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;
  token!: Observable<string>;

  constructor(
    private featuresProvider: FeaturesProvider,
    private sideNavService: SideNavService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activatedRoute
      .queryParamMap
      .pipe(map(params => params.get('token') || 'None'));

    this.currentModule = this.featuresProvider.provide(this.moduleId);

    this.sideNavStatusSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      });
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe();
  }

  onVoted(agreed: boolean) {
    if (agreed) {
    } else {}
  }

}
