import { TestBed } from '@angular/core/testing';
import { BreadcrumbAuthComponent } from './breadcrumb-auth.component';

describe('BreadcrumbAuthComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        BreadcrumbAuthComponent
    ]
}).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BreadcrumbAuthComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
