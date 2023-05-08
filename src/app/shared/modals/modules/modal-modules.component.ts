import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-modal-modules',
    templateUrl: './modal-modules.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../modals.component.scss'],
    standalone: true,
    imports: [FontAwesomeModule, NgFor, RouterLinkActive, RouterLink, TranslateModule]
})
export class ModalModulesComponent implements OnInit {

  @Input() modal!: any;
  @Input() data!: IModule[];

  ngOnInit() {
  }


  constructor() {
  }


}
