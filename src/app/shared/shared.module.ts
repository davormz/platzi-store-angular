import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module'
import { ToggleButtonComponent} from './components/toggle-button/toggle-button.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';

@NgModule({
  declarations: [ToggleButtonComponent,
    FavButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToggleButtonComponent,
    FavButtonComponent
  ]
})
export class SharedModule { }
