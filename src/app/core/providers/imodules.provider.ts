import { Injectable } from '@angular/core';

import { IModule } from '../interfaces/imodule.interface';
import { IModulesEnum } from '../enums/imodules.enum';

@Injectable({ providedIn: 'root' })
export class IModulesProvider {

  provide(): IModule[] {
    let modules: IModule[] = [];

    modules = [
      {
        id: IModulesEnum.dashboard,
        title: 'modules.dashboard.summary',
        path: '/dashboard'
      },
      {
        id: IModulesEnum.operators,
        title: 'modules.operators.list',
        path: '/operators'
      },
      {
        id: IModulesEnum.assets,
        title: 'modules.assets.main'
      },
      {
        id: IModulesEnum.staff,
        title: 'modules.staff.main'
      },
      {
        id: IModulesEnum.regulations,
        title: 'modules.regulations.main'
      },
      {
        id: IModulesEnum.locations,
        title: 'modules.locations.main'
      },
      {
        id: IModulesEnum.purchasing,
        title: 'modules.purchasing.main'
      },
      {
        id: IModulesEnum.receiving,
        title: 'modules.receiving.main'
      },
      {
        id: IModulesEnum.parts,
        title: 'modules.parts.main'
      },
      {
        id: IModulesEnum.control,
        title: 'modules.control.main'
      }
    ];

    return modules;
  }

}
