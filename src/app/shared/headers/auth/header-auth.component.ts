import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IModule } from 'src/app/core/interfaces/imodule.interface';
import { IModulesProvider } from 'src/app/core/providers/imodules.provider';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header-auth.component.scss']
})
export class HeaderAuthComponent implements OnInit {

  closeResult: string = '';
  imodules: IModule[] = [];

  constructor(private imodulesProvider: IModulesProvider, private modalService: NgbModal) {}

  ngOnInit() {
    this.imodules = this.imodulesProvider.provide();
  }

  openModal(content:any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
