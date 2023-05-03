import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class FeaturesProvider {

  provide(moduleId: string): IModule {
    let modules!: IModule[];

    modules = [
      {
        id: 'dashboard',
        title: 'modules.dashboard.main',
        features: [
          {
            id: '',
            label: 'modules.dashboard.regulations',
            path: '',
            icon: '',
            features: []
          },
          {
            id: '',
            label: 'modules.dashboard.staffing',
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
