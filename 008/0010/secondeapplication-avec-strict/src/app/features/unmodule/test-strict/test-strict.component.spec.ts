import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStrictComponent } from './test-strict.component';

describe('TestStrictComponent', () => {
  let component: TestStrictComponent;
  let fixture: ComponentFixture<TestStrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
