import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';

import { SharedModule } from './../shared/shared.module';
import { ProductsModule } from './products/products.module';
import { StorePageComponent } from './components/store-page/store-page.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreFooterComponent } from './components/store-footer/store-footer.component';
import { MaterialModule } from './../material/material.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [StorePageComponent, 
    StoreHeaderComponent, 
    StoreFooterComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    ProductsModule,
    MaterialModule,
    HomeModule
  ],
  exports: [
    StoreHeaderComponent, 
    StoreFooterComponent
  ]
})
export class StoreModule { }
