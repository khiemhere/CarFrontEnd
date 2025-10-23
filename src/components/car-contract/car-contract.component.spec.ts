import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarContractComponent } from './car-contract.component';

describe('CarContractComponent', () => {
  let component: CarContractComponent;
  let fixture: ComponentFixture<CarContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
