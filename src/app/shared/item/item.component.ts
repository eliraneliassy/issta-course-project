import {
  Component, OnInit, Input, Output,
  EventEmitter, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';

import { Router } from '@angular/router';
import { Item } from './../../item.interface';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() item: Item;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() existInCart: boolean;

  constructor(private router: Router) {

  }

  // constructor() {
  //   console.log('ctor');
  //  }

  // ngOnInit() {
  //   console.log('on init');
  // }

  // ngAfterViewInit(): void {
  //   console.log('after view init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('after view checked');
  // }
  // ngAfterContentInit(): void {
  //   console.log('after content init');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('after content checked');
  // }
  // ngDoCheck(): void {
  //   console.log('do check');
  // }
  // ngOnDestroy(): void {
  //   console.log('on destroy');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('on changes', changes);
  // }

  addToCartClicked() {
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked() {
    this.removeFromCart.emit(this.item);
  }

  goToProduct() {
    // this.router.navigateByUrl(`/product?id=${this.item._id}`});
    this.router.navigate(['product'], {queryParams: {id: this.item._id}});
  }

}
