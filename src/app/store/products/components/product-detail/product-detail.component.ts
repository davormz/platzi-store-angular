import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from './../../../../core/models/product.model';
import { ProductsService } from './../../../../core/services/products.service';
import { ShoppingCartService } from './../../../../core/services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  @Output() addTocartEmitter: EventEmitter<any> = new EventEmitter();

  constructor( private route: ActivatedRoute, private productsService: ProductsService,
    private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProductById(id).subscribe( product => {
      this.product = product;
    })
  }

  addTocart(){
    this.shoppingCart.addToCart(this.product);
    this.addTocartEmitter.emit(this.product.id);
  }

}
