import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipiesComponent } from './receipies.component';

describe('ReceipiesComponent', () => {
  let component: ReceipiesComponent;
  let fixture: ComponentFixture<ReceipiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipiesComponent]
    });
    fixture = TestBed.createComponent(ReceipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
