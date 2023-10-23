import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePelisComponent } from './see-pelis.component';

describe('SeePelisComponent', () => {
  let component: SeePelisComponent;
  let fixture: ComponentFixture<SeePelisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeePelisComponent]
    });
    fixture = TestBed.createComponent(SeePelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
