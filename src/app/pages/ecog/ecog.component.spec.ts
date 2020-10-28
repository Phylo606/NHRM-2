import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcogComponent } from './ecog.component';

describe('EcogComponent', () => {
  let component: EcogComponent;
  let fixture: ComponentFixture<EcogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
