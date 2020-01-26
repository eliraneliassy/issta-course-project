import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items: Item[] = [];
  shoppingCart: Item[] = [];

  constructor(
    private feedService: FeedService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.feedService.getFeed().subscribe((items: Item[]) => this.items = items);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  revmoveFromCart(item: Item){
    this.cartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }


}
