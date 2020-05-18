import { Product } from './product.model';

export class ProductCollection {
  constructor() {}
  userName: string | null;
  email: string | null;
  phone: number | null;
  address: string | null;
  productDetails: Product;
}
