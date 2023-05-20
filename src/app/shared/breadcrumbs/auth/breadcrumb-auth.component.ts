import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-breadcrumb-auth',
  standalone: true,
  imports: [
    CommonModule, TranslateModule
  ],
  templateUrl: './breadcrumb-auth.component.html',
  styleUrls: ['./breadcrumb-auth.component.scss']
})
export class BreadcrumbAuthComponent {


  constructor() { }


}
