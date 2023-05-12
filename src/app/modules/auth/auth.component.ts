import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { LayoutsAuthComponent } from 'src/app/shared/layouts/auth/layouts-auth.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, LayoutsAuthComponent],
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit {

  moduleId!: IModulesEnum;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.moduleId = this.activatedRoute.snapshot.data['moduleId'];
  }
}
