import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class FeaturesProvider {

  provide(moduleId: string): IModule {
    let modules!: IModule[];

    modules = [
      {
        id: 'dashboard',
        title: 'modules.dashboard.summary',
        path: '/dashboard',
        features: [
          {
            id: '',
            label: 'modules.dashboard.regulations',
            path: '/dashboard/regulations',
            icon: 'regulations',
            features: []
          },
          {
            id: '',
            label: 'modules.dashboard.staffing',
            path: '/dashboard/staffing',
            icon: 'staffing',
            features: []
          }
        ]
      },
      {
        id: 'operators',
        title: 'modules.operators.list',
        path: '/operators',
        features: [
          // {
          //   id: 'detail',
          //   label: 'modules.operators.detail',
          //   path: '/operators/:id',
          //   icon: '',
          //   features: []
          // },
          {
            id: 'staffing',
            label: 'modules.dashboard.staffing',
            path: '/operators/staffing',
            icon: '',
            features: []
          }
        ]
      }
    ];

    return modules.find((x: IModule) => x.id === moduleId) as IModule;
  }

}
