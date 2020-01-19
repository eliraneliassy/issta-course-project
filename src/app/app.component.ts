import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Item[] = [];
  shoppingCart: Item[] = [];

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this.feedService.getFeed().subscribe((items: Item[]) => this.items = items);
  }

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
