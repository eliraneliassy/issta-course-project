import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  id: string;
  item$: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService,
    private cartService: CartService) { }

  ngOnInit() {
    // this.route.queryParams
    //   .pipe(
    //     filter((params: Params) => params.id !== null)
    //   )
    //   .subscribe((params: Params) => {
    //     if (params.id) {
    //       this.id = params.id;
    //       console.log(this.id);
    //     }
    //   });

    this.item$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.id = params.id;
          return this.feedService.getItemByID(this.id);
        })
      );




  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
