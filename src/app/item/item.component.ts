import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../item.interface';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() existInCart: boolean;

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

}
