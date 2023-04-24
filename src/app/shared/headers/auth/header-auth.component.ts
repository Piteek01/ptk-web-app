import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss']
})
export class HeaderAuthComponent implements OnInit {

  constructor(private offCanvasService: NgbOffcanvas) {
  }


  // @Input() navPanelClosed!: boolean;

  // @Output() navPanelExpanded: EventEmitter<boolean> = new EventEmitter();


  ngOnInit() {
  }

  openOffCanvas() {
    const offCanvasRef = this.offCanvasService.open(null);
    offCanvasRef.componentInstance.data = 'Data';
  }
}
