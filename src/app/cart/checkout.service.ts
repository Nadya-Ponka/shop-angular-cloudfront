import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';
import { Observable } from 'rxjs';
import { ProductCheckout } from '../products/product.interface';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(
    private readonly cartService: CartService,
    private readonly productsService: ProductsService
  ) {}

  getProductsForCheckout(): Observable<ProductCheckout[]> {
    return this.cartService.cart$.pipe(
      map((cart) =>
        cart.items.map((item) => ({
          ...item.product,
          orderedCount: item.count,
          totalPrice: +(item.count * item.product.price).toFixed(2),
        }))
      )
    );
  }
}
