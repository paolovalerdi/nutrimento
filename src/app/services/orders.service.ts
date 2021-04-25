import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../interfaces/order';
import { OrderFood } from '../interfaces/order-food';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly firestore: AngularFirestore) { }

  getOrdersByUsersId(user: string) {

  }

  async sentOrderToDb(useruid: string, products: Array<OrderFood>) {
    await this.firestore.collection<Order>("orders").add({
      userId: useruid,
      date: new Date().toString(),
      products: JSON.stringify(products),
      status: 0
    });
  } 
}
