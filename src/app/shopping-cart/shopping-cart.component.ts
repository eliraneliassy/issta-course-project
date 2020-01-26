import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../item.interface';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<Item[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

}
