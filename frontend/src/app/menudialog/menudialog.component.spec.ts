import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudialogComponent } from './menudialog.component';

describe('MenudialogComponent', () => {
  let component: MenudialogComponent;
  let fixture: ComponentFixture<MenudialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenudialogComponent]
    });
    fixture = TestBed.createComponent(MenudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
