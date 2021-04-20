import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderFood } from '../interfaces/order-food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Array<OrderFood>>(new Array());

  constructor() { }
 
  addToCart(item: OrderFood) {
    const lastList = this.cart.value;
    lastList.push(item);
    this.cart.next(lastList);
  }

}
