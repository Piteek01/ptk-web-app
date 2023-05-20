import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { Operator } from 'src/app/core/interfaces/operator.interface';

import { BreadcrumbAuthComponent } from 'src/app/shared/breadcrumbs/auth/breadcrumb-auth.component';
import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';
import { OperatorService } from 'src/app/core/services/operator.service';

@Component({
  selector: 'app-operators-list',
  standalone: true,
  imports: [CommonModule, TranslateModule,
    BreadcrumbAuthComponent, HeaderAuthComponent, SideNavComponent, RouterLinkActive, RouterLink],
  templateUrl: './operators-list.component.html',
  styleUrls: ['../operators.component.scss']
})
export class OperatorsListComponent implements OnInit {

  operators!: Observable<Operator[]>;
  moduleId = IModulesEnum.operators;
  selectedOperator!: Operator | null;

  constructor(
    private operatorService: OperatorService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.operators = this.operatorService.getOperators();

    this.selectedOperator = this.operatorService.selectedOperator;
  }

  onVoted(agreed: boolean) {
    if (agreed) {
    } else {}
  }

  goToDetail(operator: Operator) {
    const operatorId = operator? operator.id : null;

    this.router.navigate(['/detail', { id: operatorId }]);
  }

}
