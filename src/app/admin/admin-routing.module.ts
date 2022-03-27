import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
    path: '',
    component: AdminNavComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/new',
        component: ProductFormComponent
      },
      {
        path: 'products/:id',
        component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
