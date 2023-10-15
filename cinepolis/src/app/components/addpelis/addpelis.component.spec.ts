import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpelisComponent } from './addpelis.component';

describe('AddpelisComponent', () => {
  let component: AddpelisComponent;
  let fixture: ComponentFixture<AddpelisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpelisComponent]
    });
    fixture = TestBed.createComponent(AddpelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
