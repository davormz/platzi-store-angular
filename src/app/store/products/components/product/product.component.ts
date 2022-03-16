import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './../../../../core/models/product.model';
import { ShoppingCartService } from './../../../../core/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addTocartEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addTocart(){
    this.shoppingCart.addToCart(this.product);
    this.addTocartEmitter.emit(this.product.id);
  }

}
