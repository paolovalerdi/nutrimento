import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, map, toArray } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { OrderFood } from '../interfaces/order-food';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly firestore: AngularFirestore) { }

  getAllOrders() {
    return this.firestore.collection<any>("orders").snapshotChanges().pipe(
      map(actions => actions.map(it => {
        const doc = it.payload.doc.data();
        let products = JSON.parse(doc.products);
        products = products.map((prod) => {
          return {
            name: prod.food.name,
            quantity: prod.quantity
          };
        });
        return {
          id: it.payload.doc.id,
          date: Date.parse(doc.date),
          products: products,
        }
      })),
    );
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
