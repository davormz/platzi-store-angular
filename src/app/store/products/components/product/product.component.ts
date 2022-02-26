import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './../../../../core/models/product.model';

const FAV_ICON_BORDER = 'favorite_border';
const FAV_ICON = 'favorite';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addTocartEmitter: EventEmitter<any> = new EventEmitter();

  isFavorite:boolean = false;
  favoriteIcon:string = FAV_ICON_BORDER

  constructor() { }

  ngOnInit(): void {
  }

  addTocart(){
    this.addTocartEmitter.emit(this.product.id);
  }

  toggleFavorite(){
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
      this.favoriteIcon = FAV_ICON;
    }else{
      this.favoriteIcon = FAV_ICON_BORDER;
    }
  }

}
