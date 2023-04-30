import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideNavService {
  private _sideNavStatus: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public getSideNavStatus(): Observable<number> {
    return this._sideNavStatus;
  }

  public setSideNavStatus(value: number) {
    this._sideNavStatus.next(value);
  }

}
