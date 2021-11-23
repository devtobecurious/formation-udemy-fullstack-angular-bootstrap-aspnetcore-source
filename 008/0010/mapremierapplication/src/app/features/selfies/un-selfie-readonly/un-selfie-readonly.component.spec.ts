import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnSelfieReadonlyComponent } from './un-selfie-readonly.component';

describe('UnSelfieReadonlyComponent', () => {
  let component: UnSelfieReadonlyComponent;
  let fixture: ComponentFixture<UnSelfieReadonlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnSelfieReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSelfieReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
