import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: '', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
