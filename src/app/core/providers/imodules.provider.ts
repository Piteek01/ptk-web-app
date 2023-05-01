import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class IModulesProvider {

  provide(): IModule[] {
    let modules: IModule[] = [];

    modules = [
      {
        id: 'dashboard',
        title: 'modules.dashboard.main'
      },
      {
        id: 'assets',
        title: 'modules.assets.main'
      },
      {
        id: 'staff',
        title: 'modules.staff.main'
      },
      {
        id: 'locations',
        title: 'modules.locations.main'
      },
      {
        id: 'regulations',
        title: 'modules.receiving.main'
      },
      {
        id: 'puchasing',
        title: 'modules.purchasing.main'
      },
      {
        id: 'receiving',
        title: 'modules.receiving.main'
      },
      {
        id: 'parts',
        title: 'modules.parts.main'
      },
      {
        id: 'control',
        title: 'modules.control.main'
      }
    ];

    return modules;
  }

}
