import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valid3Component } from './valid3.component';

describe('Valid3Component', () => {
  let component: Valid3Component;
  let fixture: ComponentFixture<Valid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
