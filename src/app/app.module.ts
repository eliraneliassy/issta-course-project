import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChangeColorDirective } from './change-color.directive';
import { DiscountPipe } from './discount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChangeColorDirective,
    DiscountPipe,
    HeaderComponent,
    FeedComponent,
    ShoppingCartComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
