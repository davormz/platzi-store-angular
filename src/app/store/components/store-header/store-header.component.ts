import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../core/services/shopping-cart.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent implements OnInit {
  totalProducts$: Observable<number>;
  hideBadge: boolean = true;

  constructor(private shoppingCart: ShoppingCartService) {
    this.totalProducts$ = this.shoppingCart.cart$.pipe(map(products => products.length));

    this.totalProducts$.subscribe(length => {
      if(length > 0 ){
        this.hideBadge = false;
      }
    });
   }

  ngOnInit(): void {
  }

}
