import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Item } from '../../item.interface';
import { FeedService } from '../../feed.service';
import { CartService } from '../../cart.service';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {


  items$: Observable<Item[]>;

  sub: Subscription;

  constructor(
    private feedService: FeedService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items$ = this.feedService.getFeed();

    // this.sub = interval(1000).subscribe(console.log);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  revmoveFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }


}
