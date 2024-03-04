import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplageComponent } from './templage.component';

describe('TemplageComponent', () => {
  let component: TemplageComponent;
  let fixture: ComponentFixture<TemplageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplageComponent]
    });
    fixture = TestBed.createComponent(TemplageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
