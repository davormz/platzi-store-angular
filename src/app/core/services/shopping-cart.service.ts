import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private products: Product[] = [];
  private shoppingCart = new BehaviorSubject<Product[]>([]);

  cart$ = this.shoppingCart.asObservable();

  constructor() { }

  addToCart(product: Product){
    this.products = [...this.products, product];
    this.shoppingCart.next(this.products);
  }
}
