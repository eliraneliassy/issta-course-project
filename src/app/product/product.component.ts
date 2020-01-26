import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: string;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService) { }

  ngOnInit() {
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.id = params.id;
    //   console.log(this.id);
    // });

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
      this.feedService.getItemByID(this.id).subscribe(item => this.item = item);
    });



  }

}
