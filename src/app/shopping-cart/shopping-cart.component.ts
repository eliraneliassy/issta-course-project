import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart: Item[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

}
