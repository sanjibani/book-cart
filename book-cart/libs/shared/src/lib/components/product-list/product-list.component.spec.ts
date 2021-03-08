import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';

import { ProductListComponent } from './product-list.component';
import { product } from '@cart-angular/mock-data';

@Component({
  selector: 'cart-angular-star-rating',
  template: '<p>Mock Star Rating Component</p>'
})
class MockStarRatingComponent {
  @Input() rating;
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, StoreModule.forRoot({})],
      declarations: [ProductListComponent, MockStarRatingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event ViewProduct OUPUT', () => {
    spyOn(component.viewEvent, 'emit');

    component.viewProduct(product);
    fixture.detectChanges();
    expect(component.viewEvent.emit).toHaveBeenCalledWith(product);
  });

  it('it should emit the billing page OUTPUT', () => {
    spyOn(component.openBillPage, 'emit');

    component.openBillingPage(product);
    fixture.detectChanges();
    expect(component.openBillPage.emit).toHaveBeenCalledWith(product);
  });

  it('it should emit the addorRemove OUTPUT', () => {
    spyOn(component.addorRemove, 'emit');

    component.removeFromCart(product);
    fixture.detectChanges();
    expect(component.addorRemove.emit).toHaveBeenCalled();
  });
});
