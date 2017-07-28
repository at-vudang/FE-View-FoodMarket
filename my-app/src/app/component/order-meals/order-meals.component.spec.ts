import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMealsComponent } from './order-meals.component';

describe('OrderMealsComponent', () => {
  let component: OrderMealsComponent;
  let fixture: ComponentFixture<OrderMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
