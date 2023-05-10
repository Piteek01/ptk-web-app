import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";
import { OperatorsMainComponent } from "./main/operators-main.component";
import { OperatorsDetailComponent } from "./detail/operators-detail.component";

export const operatorPaths = {
  base: '',
  detail: ':id'
};

const resolvedMainTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operators);
const resolvedDetailTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operatorsDetail);

export const OPERATORS_ROUTING: Route[] = [
  { path: `${operatorPaths.detail}`, component: OperatorsDetailComponent, title: resolvedDetailTitle },
  { path: '', pathMatch: 'full', component: OperatorsMainComponent, title: resolvedMainTitle }
];


// import { RouterModule, Routes } from '@angular/router';
// import { OperatorsMainComponent } from './main/operators-main.component';

// import { NgModule } from '@angular/core';

// const routes: Routes = [
//   {
//     path: 'dashboard',
//     // redirectTo: 'dashboard',
//     pathMatch: 'full',
//     // component: OperatorsMainComponent
//   },
//   {
//     path: '',
//     // redirectTo: 'dashboard',
//     pathMatch: 'full',
//     // component: OperatorsMainComponent
//   },
//   {
//     path: '**',
//     redirectTo: ''
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class OperatorsRoutingModule {}
