import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
