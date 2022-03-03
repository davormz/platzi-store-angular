import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { ShoppingCartService } from './../../../core/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.products$ = this.shoppingCartService.cart$;
   }

  ngOnInit(): void {
  }

}
