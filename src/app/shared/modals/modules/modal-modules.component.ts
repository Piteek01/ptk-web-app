import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-modules',
  templateUrl: './modal-modules.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-modules.component.scss']
})
export class ModalModulesComponent {

  @Input() modal!: any;


  constructor() {
  }


}
