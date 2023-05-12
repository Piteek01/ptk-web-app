import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { FeaturesProvider } from 'src/app/core/providers/features.provider';
import { SideNavService } from 'src/app/core/services/side-nav.service';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-layouts-auth',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderAuthComponent, SideNavComponent,
    RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './layouts-auth.component.html',
  styleUrls: ['./layouts-auth.component.scss']
})
export class LayoutsAuthComponent implements OnInit, OnDestroy {

  currentModule!: IModule;
  sideNavStatus = 1;
  sideNavStatusSubscription!: Subscription;

  @Input() moduleId!: IModulesEnum;

  constructor(
    private featuresProvider: FeaturesProvider,
    private sideNavService: SideNavService
    ) {
  }

  ngOnInit() {
    this.currentModule = this.featuresProvider.provide(this.moduleId);

    this.sideNavStatusSubscription = this.sideNavService.sideNavStatus.subscribe(
      value => {
        this.sideNavStatus = value;
      });
  }

  ngOnDestroy() {
    this.sideNavStatusSubscription.unsubscribe();
  }

}
