import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';

@Injectable({ providedIn: 'root' })
export class IModulesProvider {

  provide(): IModule[] {
    let modules: IModule[] = [];

    modules = [
      {
        id: 'market',
        title: 'modules.market.main'
      },
      {
        id: 'aircraft',
        title: 'modules.aircraft.main'
      },
      {
        id: 'crews',
        title: 'modules.crews.main'
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
        id: 'inventory',
        title: 'modules.inventory.main'
      },
      {
        id: 'control',
        title: 'modules.control.main'
      }
    ];

    return modules;
  }

}
