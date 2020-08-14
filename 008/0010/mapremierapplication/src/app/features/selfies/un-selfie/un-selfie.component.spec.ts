import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSelfieComponent } from './un-selfie.component';

describe('UnSelfieComponent', () => {
  let component: UnSelfieComponent;
  let fixture: ComponentFixture<UnSelfieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnSelfieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
