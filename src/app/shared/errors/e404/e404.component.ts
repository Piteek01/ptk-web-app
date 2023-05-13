import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';

@Component({
  selector: 'app-errors-e404',
  standalone: true,
  imports: [
    CommonModule, TranslateModule,
    HeaderAuthComponent
  ],
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.scss']
})
export class E404Component {

  currentModule!: IModule;
  moduleId = 'e404';

  constructor() { }


}
