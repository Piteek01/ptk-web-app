import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";
import { OperatorsComponent } from "./operators.component";
import { OperatorsListComponent } from "./list/operators-list.component";
import { OperatorsDetailComponent } from "./detail/operators-detail.component";

export const operatorPaths = {
  base: '',
  detail: ':id'
};

const resolvedListTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operators);
const resolvedDetailTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operatorsDetail);

export const OPERATORS_ROUTING: Route[] = [
  { path: '', component: OperatorsComponent,
    children: [
      { path: `${operatorPaths.detail}`, component: OperatorsDetailComponent, title: resolvedDetailTitle },
      { path: '', component: OperatorsListComponent, title: resolvedListTitle }
    ]
  }

];
