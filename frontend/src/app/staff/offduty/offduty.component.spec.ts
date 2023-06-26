import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffdutyComponent } from './offduty.component';

describe('OffdutyComponent', () => {
  let component: OffdutyComponent;
  let fixture: ComponentFixture<OffdutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffdutyComponent]
    });
    fixture = TestBed.createComponent(OffdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
