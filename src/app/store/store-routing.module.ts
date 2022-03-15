import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePageComponent } from './components/store-page/store-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreLoginComponent } from './components/store-login/store-login.component';


const routes: Routes = [
  {
    path: '',
    component: StorePageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        component: StoreLoginComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
