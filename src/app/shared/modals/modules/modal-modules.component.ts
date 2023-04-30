import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IModule } from 'src/app/core/interfaces/imodule.interface';

@Component({
  selector: 'app-modal-modules',
  templateUrl: './modal-modules.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-modules.component.scss']
})
export class ModalModulesComponent implements OnInit {

  @Input() modal!: any;
  @Input() data!: IModule[];

  ngOnInit() {
  }


  constructor() {
  }


}
