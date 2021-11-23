import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelfieListComponent } from './selfie-list.component';

describe('SelfieListComponent', () => {
  let component: SelfieListComponent;
  let fixture: ComponentFixture<SelfieListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
