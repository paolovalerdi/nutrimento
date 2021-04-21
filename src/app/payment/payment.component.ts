import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  isLoading: Observable<Boolean>;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<PaymentComponent>,
    private cartService: CartService
  ) { 
    this.isLoading = new Observable(subscriber => {
      subscriber.next(true);
      setTimeout(() => {
        subscriber.next(false);
      }, 1000)
    });
    this.isLoading.subscribe(suscriber => {
      if(!suscriber) {
        setTimeout(() => {
          dialogRef.close();
          cartService.clearCart();
          router.navigate(["/home"])
        }, 1000);
      }
    })
  }

  ngOnInit() {    
  }

}
