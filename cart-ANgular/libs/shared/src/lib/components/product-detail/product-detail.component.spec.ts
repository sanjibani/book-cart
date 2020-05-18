import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';

import { ProductDetailComponent } from './product-detail.component';
import { product } from '@cart-angular/mock-data';

@Component({
  selector: 'cart-angular-star-rating',
  template: '<p>Mock Star Rating Component</p>'
})
class MockStarRatingComponent {
  @Input() rating;
}

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, StoreModule.forRoot({})],
      declarations: [ProductDetailComponent, MockStarRatingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event Close Product OUPUT', () => {
    spyOn(component.closeProduct, 'emit');

    component.closeProductDetail();
    fixture.detectChanges();
    expect(component.closeProduct.emit).toHaveBeenCalled();
  });

  it('should emit the event Billing Page OUPUT', () => {
    component.productDetail = product;
    spyOn(component.openBillPage, 'emit');

    component.openBillingPage();
    fixture.detectChanges();
    expect(component.openBillPage.emit).toHaveBeenCalledWith(component.productDetail);
  });

  it('it should emit the addorRemove OUTPUT', () => {
    spyOn(component.addorRemove, 'emit');

    component.removeFromCart();
    fixture.detectChanges();
    expect(component.addorRemove.emit).toHaveBeenCalled();
  });

  it('it should emit the addorRemove for addtocart method OUTPUT', () => {
    spyOn(component.addorRemove, 'emit');

    component.addtoCart();
    fixture.detectChanges();
    expect(component.addorRemove.emit).toHaveBeenCalled();
  });
});
