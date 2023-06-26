import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingComponent } from './staffing.component';

describe('StaffingComponent', () => {
  let component: StaffingComponent;
  let fixture: ComponentFixture<StaffingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffingComponent]
    });
    fixture = TestBed.createComponent(StaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
