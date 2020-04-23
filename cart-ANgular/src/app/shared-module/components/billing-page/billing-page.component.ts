import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCollection } from '../../models/collection-detail.model';
import { Store } from '@ngrx/store';
import * as fromProduct from '../../../state/reducers/cartInfo.reducer';
import * as cartActions from '../../../state/actions/cartInfo.action';


@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {

  purchaseFlag = false;
  @Input() productDetail;
  @Output() closeProduct = new EventEmitter();
  constructor(private store: Store<fromProduct.State>) { }

  billingForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const purchasedProduct = new ProductCollection ();
    purchasedProduct.userName = this.billingForm.value.name;
    purchasedProduct.phone = this.billingForm.value.contact;
    purchasedProduct.email = this.billingForm.value.email;
    purchasedProduct.address = this.billingForm.value.address;
    purchasedProduct.productDetails = this.productDetail;
    this.addOrderDetails(purchasedProduct);
  }

  addOrderDetails(purchasedProduct) {
    this.store.dispatch(new cartActions.AddtoCollections(purchasedProduct));
    this.store.dispatch(new cartActions.RemovefromCart(this.productDetail));
    this.purchaseFlag = true;
  }

  closeBillingPage() {
    this.closeProduct.emit();
  }

}
