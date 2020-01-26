import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shoppingCart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  addToCart(item: Item) {
    const cart = this.shoppingCart.getValue();
    cart.push(item);
    this.shoppingCart.next(cart);

    console.log(cart);
  }

  removeFromCart(item: Item) {
    const cart = this.shoppingCart.getValue();

    const index = cart.findIndex(x => x._id === item._id);
    if (index > -1) {
      cart.splice(index, 1);
    }

    this.shoppingCart.next(cart);
    console.log(cart);
  }

  existInCart(item: Item): boolean {
    const cart = this.shoppingCart.getValue();
    const index = cart.findIndex(x => x._id === item._id);
    return index > -1 ? true : false;
  }

  emptyCart() {
    this.shoppingCart.next([]);
    console.log([]);
  }

  getCart(): Observable<Item[]> {
    return this.shoppingCart.asObservable();
  }

}
