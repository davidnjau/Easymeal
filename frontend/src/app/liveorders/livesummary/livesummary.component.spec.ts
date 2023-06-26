import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesummaryComponent } from './livesummary.component';

describe('LivesummaryComponent', () => {
  let component: LivesummaryComponent;
  let fixture: ComponentFixture<LivesummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivesummaryComponent]
    });
    fixture = TestBed.createComponent(LivesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
