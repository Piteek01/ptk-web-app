import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideNavProvider {
  private _sideNavStatus: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  // navbarStatus = this._navbarStatus.asObservable();
  // public get navbarStatus(): number {
  //   return this._navbarStatus.asObservable();
  // }

  // public set navbarStatus(value: number) {
  //   this._navbarStatus.next(value);
  // }

  public getSideNavStatus(): Observable<number> {
    return this._sideNavStatus;
  }

  public setSideNavStatus(value: number) {
    this._sideNavStatus.next(value);
  }

}
