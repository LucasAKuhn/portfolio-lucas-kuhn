import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissComponent } from './tiss.component';

describe('TissComponent', () => {
  let component: TissComponent;
  let fixture: ComponentFixture<TissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TissComponent]
    });
    fixture = TestBed.createComponent(TissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
