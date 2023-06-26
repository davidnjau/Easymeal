import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusinglemealsComponent } from './menusinglemeals.component';

describe('MenusinglemealsComponent', () => {
  let component: MenusinglemealsComponent;
  let fixture: ComponentFixture<MenusinglemealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusinglemealsComponent]
    });
    fixture = TestBed.createComponent(MenusinglemealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
