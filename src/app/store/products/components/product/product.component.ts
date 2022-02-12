import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './../../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addTocartEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTocart(){
    this.addTocartEmitter.emit(this.product.id);
  }

}
