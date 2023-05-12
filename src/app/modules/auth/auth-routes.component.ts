import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";
import { authGuard } from "src/app/core/guards/auth.guard";
import { canDeactivateGuard } from "src/app/core/guards/can-deactivate.guard";
import { operatorDetailResolver } from "src/app/core/resolvers/operators.resolver";

import { AuthComponent } from "./auth.component";
import { DashboardSummaryComponent } from "../dashboard/summary/dashboard-summary.component";
import { OperatorsDetailComponent } from "../operators/detail/operators-detail.component";
import { OperatorsListComponent } from "../operators/list/operators-list.component";

const OperatorsPaths = {
  detail: ':id'
};

const resolvedListTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operators);
const resolvedDetailTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operatorsDetail);

export const DASHBOARD_ROUTING: Route[] = [
  { path: '', component: AuthComponent,
    data: { moduleId: IModulesEnum.dashboard },
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardSummaryComponent, title: 'SMX' }
    ]
  }

];

export const OPERATORS_ROUTING: Route[] = [
  { path: '', component: AuthComponent,
    data: { moduleId: IModulesEnum.operators },
    canActivate: [authGuard],
    children: [
      { path: `${OperatorsPaths.detail}`,
        component: OperatorsDetailComponent,
        canDeactivate: [canDeactivateGuard],
        resolve: {
          operator: operatorDetailResolver
        },
        title: 'SMX' },
      { path: '', component: OperatorsListComponent, title: 'SMX' }
    ]
  }

];
