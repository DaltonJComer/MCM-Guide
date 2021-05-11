import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingeCalculatorComponent } from './binge-calculator.component';

describe('BingeCalculatorComponent', () => {
  let component: BingeCalculatorComponent;
  let fixture: ComponentFixture<BingeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingeCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
