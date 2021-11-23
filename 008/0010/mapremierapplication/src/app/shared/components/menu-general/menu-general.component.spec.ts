import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuGeneralComponent } from './menu-general.component';

describe('MenuGeneralComponent', () => {
  let component: MenuGeneralComponent;
  let fixture: ComponentFixture<MenuGeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
