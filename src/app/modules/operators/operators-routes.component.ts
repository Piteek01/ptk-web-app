import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";
import { OperatorsListComponent } from "./list/operators-list.component";
import { OperatorsDetailComponent } from "./detail/operators-detail.component";

export const operatorPaths = {
  base: '',
  detail: ':id'
};

const resolvedMainTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operators);
const resolvedDetailTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operatorsDetail);

export const OPERATORS_ROUTING: Route[] = [
  { path: `${operatorPaths.detail}`, component: OperatorsDetailComponent, title: resolvedDetailTitle },
  { path: '', pathMatch: 'full', component: OperatorsListComponent, title: resolvedMainTitle }
];
