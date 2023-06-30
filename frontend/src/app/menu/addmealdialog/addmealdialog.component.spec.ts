import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmealdialogComponent } from './addmealdialog.component';

describe('AddmealdialogComponent', () => {
  let component: AddmealdialogComponent;
  let fixture: ComponentFixture<AddmealdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmealdialogComponent]
    });
    fixture = TestBed.createComponent(AddmealdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
