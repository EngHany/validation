import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTestComponent } from './valid-test.component';

describe('ValidTestComponent', () => {
  let component: ValidTestComponent;
  let fixture: ComponentFixture<ValidTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
