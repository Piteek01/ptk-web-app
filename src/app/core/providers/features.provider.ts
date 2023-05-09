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
        path: '/',
        features: [
          {
            id: '',
            label: 'modules.dashboard.regulations',
            path: 'regulations',
            icon: '',
            features: []
          },
          {
            id: '',
            label: 'modules.dashboard.staffing',
            path: 'staffing',
            icon: '',
            features: []
          }
        ]
      },
      {
        id: 'operators',
        title: 'modules.operators.main',
        path: '/operators',
        features: [
          {
            id: '/detail',
            label: 'modules.operators.detail',
            path: '/operators/detail/1',
            icon: '',
            features: []
          },
          {
            id: '',
            label: 'modules.dashboard.staffing',
            path: 'staffing',
            icon: '',
            features: []
          }
        ]
      }
    ];

    return modules.find((x: IModule) => x.id === moduleId) as IModule;
  }

}
