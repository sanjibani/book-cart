import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { productCollection } from '@cart-angular/mock-data';
import { BillingPageComponent } from './billing-page.component';

describe('BillingPageComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), ReactiveFormsModule, FormsModule],
      declarations: [BillingPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event close Billing Page OUPUT', () => {
    spyOn(component.closeProduct, 'emit');

    component.closeBillingPage();
    fixture.detectChanges();
    expect(component.closeProduct.emit).toHaveBeenCalledWith();
  });

  it('should trigger addOrderdetails event', () => {
    component.purchaseFlag = false;

    component.addOrderDetails(productCollection);
    fixture.detectChanges();
    expect(component.purchaseFlag).toBeTruthy();
  });

  it('should trigger onsubmit action on button click', () => {
    component.purchaseFlag = false;
    component.onSubmit();

    fixture.detectChanges();
    expect(component.purchaseFlag).toBeTruthy();
  });
});
