import { ResolveFn, Route } from "@angular/router";

import { IModulesEnum } from "src/app/core/enums/imodules.enum";
import { OperatorsMainComponent } from "./main/operators-main.component";

export const operatorPaths = {
  base: 'operators',
  edit: 'edit/{id}',
  error404: ''
};

const resolvedMainTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operators);
const resolvedEditTitle: ResolveFn<string> = () => Promise.resolve(IModulesEnum.operatorsDetail);

export const OPERATORS_ROUTING: Route[] = [
  { path: '', component: OperatorsMainComponent, title: resolvedMainTitle },
  { path: `${operatorPaths.base}/${operatorPaths.edit}`, component: OperatorsMainComponent, title: resolvedEditTitle },
  { path: '**', redirectTo: operatorPaths.error404 },
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
