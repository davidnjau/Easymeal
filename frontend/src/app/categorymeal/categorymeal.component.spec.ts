import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymealComponent } from './categorymeal.component';

describe('CategorymealComponent', () => {
  let component: CategorymealComponent;
  let fixture: ComponentFixture<CategorymealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymealComponent]
    });
    fixture = TestBed.createComponent(CategorymealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
