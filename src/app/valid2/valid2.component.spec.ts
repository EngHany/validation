import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { valid2Component } from './valid2.component';

describe('Valid2Component', () => {
  let component: valid2Component;
  let fixture: ComponentFixture<valid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ valid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(valid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
