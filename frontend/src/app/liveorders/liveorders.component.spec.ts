import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveordersComponent } from './liveorders.component';

describe('LiveordersComponent', () => {
  let component: LiveordersComponent;
  let fixture: ComponentFixture<LiveordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveordersComponent]
    });
    fixture = TestBed.createComponent(LiveordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
