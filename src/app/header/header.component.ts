import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  user$: Observable<string>;

  constructor(
    private cartService: CartService,
    private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.getUser();
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

}
