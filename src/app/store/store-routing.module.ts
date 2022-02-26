import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePageComponent } from './components/store-page/store-page.component';


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
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
