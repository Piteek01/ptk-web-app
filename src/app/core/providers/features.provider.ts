import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class FeaturesProvider {

  provide(moduleId: string): IModule {
    let modules!: IModule[];

    modules = [
      {
        id: 'market',
        title: 'modules.market.main',
        features: [
          {
            id: '',
            label: 'modules.market.feature1',
            path: '',
            icon: '',
            features: []
          },
          {
            id: '',
            label: 'modules.market.feature2',
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
