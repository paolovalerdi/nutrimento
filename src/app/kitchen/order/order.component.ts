import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Observable<any>

  constructor(
    private readonly orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getAllOrders();
  }

}
