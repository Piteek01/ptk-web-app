import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { find } from 'lodash';

import { IModulesEnum } from 'src/app/core/enums/imodules.enum';
import { Operator } from 'src/app/core/interfaces/operator.interface';

import { DialogService } from 'src/app/core/services/dialog.service';
// import { OperatorService } from 'src/app/core/services/operator.service';

import { SideNavComponent } from 'src/app/shared/side-nav/side-nav.component';
import { HeaderAuthComponent } from 'src/app/shared/headers/auth/header-auth.component';
import { License } from 'src/app/core/interfaces/license.interface';

@Component({
  selector: 'app-operators-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, HeaderAuthComponent, SideNavComponent,
    RouterLinkActive, RouterLink],
  templateUrl: './operators-new.component.html',
  styleUrls: ['../operators.component.scss']
})
export class OperatorsNewComponent implements OnInit {

  isChanged = false;
  moduleId = IModulesEnum.operators;
  operatorTab = {
    profile: true,
    licenses: false
  };

  // operatorForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street1: new FormControl(''),
  //     street2: new FormControl(''),
  //     city: new FormControl(''),
  //     region1: new FormControl(''),
  //     postalCode: new FormControl(''),
  //     countryCode: new FormControl('')
  //   })
  // });

  operatorForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street1: [''],
      street2: [''],
      city: [''],
      region: [''],
      postalCode: [''],
      countryCode: ['']
    }),
    licenses: this.fb.array([])
  });


  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder
    // private operatorService: OperatorService,
    ) {
  }

  ngOnInit() {

  }

  get licenses(): FormArray {
    return this.operatorForm.get('licenses') as FormArray;
  }

  getRatings(licenseNum: string): FormArray {
    return find(this.licenses, (x:License) => x.licenseNum = licenseNum).ratings as FormArray;
  }

  addLicense() {
    this.licenses.push(
      this.fb.group({
        licenseNum: [''],
        licenseType: [''],
        licenseAgency: [''],
        issueDate: [''],
        expiryDate: [''],
        ratings: this.fb.group({
          ratingNum: [''],
          ratingType: [''],
          ratingAgency: [''],
          issueDate: [''],
          expiryDate: ['']
        })
      })
    )
  }

  addRating(licenseNum: string) {
    const ratings = this.getRatings(licenseNum);

    ratings.push(
      this.fb.group({
        ratingNum: [''],
        ratingType: [''],
        ratingAgency: [''],
        issueDate: [''],
        expiryDate: ['']
      })
    );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.operatorForm.value);
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.isChanged) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


}
