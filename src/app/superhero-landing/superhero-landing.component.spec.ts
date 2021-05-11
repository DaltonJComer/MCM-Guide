import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroLandingComponent } from './superhero-landing.component';

describe('SuperheroLandingComponent', () => {
  let component: SuperheroLandingComponent;
  let fixture: ComponentFixture<SuperheroLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
