import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";

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
    children: [
      { path: '', component: DashboardSummaryComponent, title: 'SMX' }
    ]
  }

];

export const OPERATORS_ROUTING: Route[] = [
  { path: '', component: AuthComponent,
    data: { moduleId: IModulesEnum.operators },
    children: [
      { path: `${OperatorsPaths.detail}`, component: OperatorsDetailComponent, title: 'SMX' },
      { path: '', component: OperatorsListComponent, title: 'SMX' }
    ]
  }

];
