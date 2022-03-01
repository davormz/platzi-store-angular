import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsComponent } from './components/products/products.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';



@NgModule({
  declarations: [ProductFormComponent, 
    AdminNavComponent, 
    ProductsComponent, 
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
