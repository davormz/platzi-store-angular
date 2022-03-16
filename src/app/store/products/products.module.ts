import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';




@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
