import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePageComponent } from './components/store-page/store-page.component';


const routes: Routes = [
  {
    path: '',
    component: StorePageComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
