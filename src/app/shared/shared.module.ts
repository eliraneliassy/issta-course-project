import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ChangeColorDirective } from '../change-color.directive';
import { DiscountPipe } from '../discount.pipe';
import { RouterModule } from '@angular/router';

export const declarations =  [
  ItemComponent,
  ChangeColorDirective,
  DiscountPipe,
];

@NgModule({
  declarations,
  exports: [
    declarations
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
