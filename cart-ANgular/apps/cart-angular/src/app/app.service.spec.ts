import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import * as mock from '@cart-angular/mock-data';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ AppService ]
    });
    service = TestBed.inject(AppService);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('able to retrieve products from the API via GET', () => {
    const mockProducts = mock.productsData;
    const mockSearch = 'angular';
    service.getProducts(mockSearch).subscribe(result => {
        expect(result.items.length).toBe(10);
        expect(result).toEqual(mockProducts);
    });
});

it('Error Message when no search query passed', () => {
  const mockProducts = mock.errorData;
  const mockSearch = '';
  service.getProducts(mockSearch).subscribe(result => {
      expect(result).toEqual(mockProducts);
  });
});
});
