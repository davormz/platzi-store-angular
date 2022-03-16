import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsComponent } from './components/products/products.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [ProductFormComponent,
    AdminNavComponent,
    ProductsComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    SharedModule
  ]
})
export class AdminModule { }
