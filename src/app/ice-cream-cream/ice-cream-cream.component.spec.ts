import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamCreamComponent } from './ice-cream-cream.component';

describe('IceCreamCreamComponent', () => {
  let component: IceCreamCreamComponent;
  let fixture: ComponentFixture<IceCreamCreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamCreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
