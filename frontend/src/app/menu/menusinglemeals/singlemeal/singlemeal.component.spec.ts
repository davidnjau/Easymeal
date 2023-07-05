import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemealComponent } from './singlemeal.component';

describe('SinglemealComponent', () => {
  let component: SinglemealComponent;
  let fixture: ComponentFixture<SinglemealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglemealComponent]
    });
    fixture = TestBed.createComponent(SinglemealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
