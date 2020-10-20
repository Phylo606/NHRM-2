import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleScreenComponent } from './scale-screen.component';

describe('ScaleScreenComponent', () => {
  let component: ScaleScreenComponent;
  let fixture: ComponentFixture<ScaleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
