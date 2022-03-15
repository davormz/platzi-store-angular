import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';

import { SharedModule } from './../shared/shared.module';
import { ProductsModule } from './products/products.module';
import { StorePageComponent } from './components/store-page/store-page.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreFooterComponent } from './components/store-footer/store-footer.component';
import { MaterialModule } from './../material/material.module';
import { HomeModule } from './home/home.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreLoginComponent } from './components/store-login/store-login.component';


@NgModule({
  declarations: [StorePageComponent,
    StoreHeaderComponent,
    StoreFooterComponent,
    ShoppingCartComponent, StoreLoginComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    ProductsModule,
    MaterialModule,
    HomeModule,
    ReactiveFormsModule
  ],
  exports: [
    StoreHeaderComponent,
    StoreFooterComponent
  ]
})
export class StoreModule { }
