import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../core/models/product.model';
import { ProductsService } from './../../../../core/services/products.service';
// import { } from 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  addToCart(id: number){

  }

}
