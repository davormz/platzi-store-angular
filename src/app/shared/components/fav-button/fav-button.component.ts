import { Component, OnInit } from '@angular/core';

const FAV_ICON_BORDER = 'favorite_border';
const FAV_ICON = 'favorite';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss']
})
export class FavButtonComponent implements OnInit {
  isFavorite:boolean = false;
  favoriteIcon:string = FAV_ICON_BORDER

  constructor() { }

  ngOnInit(): void {
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
