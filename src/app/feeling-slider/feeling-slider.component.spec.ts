import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingSliderComponent } from './feeling-slider.component';

describe('FeelingSliderComponent', () => {
  let component: FeelingSliderComponent;
  let fixture: ComponentFixture<FeelingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
