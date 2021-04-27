import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Observable<any>
  selectedOrder: BehaviorSubject<any> = new BehaviorSubject({}); 

  

  constructor(
    private readonly orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getAllOrders();
  }
  async mostrarOrden(id : string) {
   this.orderService.getOrderById(id).subscribe(s=>{
     console.log(s);
     this.selectedOrder.next(s)
    });
  }


}
