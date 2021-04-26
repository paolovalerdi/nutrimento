import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  quantityList = [1,2,3,4,5,6,7,8,9,10];
  cartItems = new Array();

  constructor(
    public loginService: LoginService,
    private cartService: CartService,
    public matDialog: MatDialog
  ) {}

  async ngOnInit() {
    this.cartService.cart.subscribe(res => {
      this.cartItems = res;
    })
  }

  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cartItems.forEach(element => {
      total = total + (element.food.price * element.quantity);
    });
    return total;
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  fakePayment() {
    this.matDialog.open(PaymentComponent);
  }
}
