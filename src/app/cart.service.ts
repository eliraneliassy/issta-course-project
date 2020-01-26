import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }

  removeFromCart(item: Item) {
    const index = this.shoppingCart.findIndex(x => x._id === item._id);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
    console.log(this.shoppingCart);
  }

  existInCart(item: Item): boolean {
    const index = this.shoppingCart.findIndex(x => x._id === item._id);
    return index > -1 ? true : false;
  }

}
