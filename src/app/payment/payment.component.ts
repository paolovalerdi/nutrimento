import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  isLoading = new BehaviorSubject<Boolean>(true);

  constructor(
    private router: Router,
    private readonly dialogRef: MatDialogRef<PaymentComponent>,
    private readonly loginService: LoginService,
    private readonly cartService: CartService,
    private readonly orderService: OrdersService,
  ) { 
  }

  async ngOnInit() {
    this.isLoading.subscribe(value => {
      if (!value) {
        this.cartService.clearCart();
        this.router.navigate(["/home"]);
        this.dialogRef.close();
      }
    });
    const user = await this.loginService.getCurrentUser();
    const products = this.cartService.cart.value;
    await this.orderService.sendOrderToDb(user.uid, products);
    this.isLoading.next(false);
  }

}
