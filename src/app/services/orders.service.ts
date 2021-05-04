import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { filter, map, toArray } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { OrderFood } from '../interfaces/order-food';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  orderSelected: Order;


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
          userid: doc.userId
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
  getOrderById(id: string) {
    console.log("Entrada" + id);
    return this.firestore.collection<any>("orders").doc<any>(id).snapshotChanges().pipe(
      map(it => {
        const doc = it.payload.data();
        let products = JSON.parse(doc.products);
        products = products.map((prod) => {
          return {
            name: prod.food.name,
            quantity: prod.quantity
          };
        });
        return {
          id: it.payload.id,
          date: Date.parse(doc.date),
          products: products,
          estado: doc.status,
        };
      }))
  }

actualizarEstado(id: string,status: string) {
  console.log("Entrada" + id);
  console.log("ESTADO", status);
return this.firestore.collection<any>("orders").doc<any>(id).update({status: status});

}
getOrderUser() {
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
        userid: doc.userId,
        status: doc.status
      }
    })),
  );
}


}

