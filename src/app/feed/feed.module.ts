import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { ProductComponent } from './product/product.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeedComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
