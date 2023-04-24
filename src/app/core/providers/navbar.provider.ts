import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavbarProvider {
  private _navbarStatus: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  // navbarStatus = this._navbarStatus.asObservable();
  // public get navbarStatus(): number {
  //   return this._navbarStatus.asObservable();
  // }

  // public set navbarStatus(value: number) {
  //   this._navbarStatus.next(value);
  // }

  public getNavbarStatus(): Observable<number> {
    return this._navbarStatus;
  }

  public setNavbarStatus(value: number) {
    this._navbarStatus.next(value);
  }

}
