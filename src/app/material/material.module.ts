import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
