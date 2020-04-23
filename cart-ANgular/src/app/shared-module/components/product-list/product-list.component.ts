import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList;
  @Output() viewEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  viewProduct(product: Product) {
      this.viewEvent.emit(product);
  }

}
