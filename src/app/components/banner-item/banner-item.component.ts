import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  
  @Input() product: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
