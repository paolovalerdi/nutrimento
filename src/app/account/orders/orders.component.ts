import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  loader = new Array(2);
  usuario: string;
  orders: Observable<any>
  selectedOrder: BehaviorSubject<any> = new BehaviorSubject({});


  constructor(private orderService: OrdersService, private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrderUser();
    this.obtenerUsuarioActual();
  }
  
  async obtenerUsuarioActual() {
    const user = await this.loginService.getCurrentUser();
    console.log("Prueba :" + user.uid);
    this.usuario = user.uid;
    return user.uid;


  }
  evaluar(user: string) {
    if (user == this.usuario) {
      return true;
      console.log(true + "Evaluacion");

    } else {
      return false;
      console.log(false + "Evaluacion");

    }
  }

}