import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubeveragesComponent } from './menubeverages.component';

describe('MenubeveragesComponent', () => {
  let component: MenubeveragesComponent;
  let fixture: ComponentFixture<MenubeveragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubeveragesComponent]
    });
    fixture = TestBed.createComponent(MenubeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
