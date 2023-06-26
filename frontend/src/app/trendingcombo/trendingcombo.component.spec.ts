import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingcomboComponent } from './trendingcombo.component';

describe('TrendingcomboComponent', () => {
  let component: TrendingcomboComponent;
  let fixture: ComponentFixture<TrendingcomboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingcomboComponent]
    });
    fixture = TestBed.createComponent(TrendingcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
