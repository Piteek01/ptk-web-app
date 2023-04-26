import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { IFeature } from '../interfaces/ifeature.interface';
import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class SideNavProvider {
  private _sideNavStatus: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public getSideNavStatus(): Observable<number> {
    return this._sideNavStatus;
  }

  public setSideNavStatus(value: number) {
    this._sideNavStatus.next(value);
  }

  provide(moduleId: string): IModule {
    let modules!: IModule[];

    modules = [
      {
        id: 'market',
        title: 'modules.market.main',
        features: [
          {
            id: '',
            label: 'Feature 1',
            path: '',
            icon: '',
            features: []
          },
          {
            id: '',
            label: 'Feature 2',
            path: '',
            icon: '',
            features: []
          }
        ]
      }
    ];

    return modules.find((x: IModule) => x.id === moduleId) as IModule;
  }

}
