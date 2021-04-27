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
        };
      }))
  }

actualizarEstado(id: string,status: string) {
  let doc = this.firestore.collection('options', ref => ref.where('id', '==', id));
  doc.snapshotChanges().pipe(
    map(actions => actions.map(a => {                                                      
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id };
    }))).subscribe((_doc: any) => {
     let id = _doc[0].payload.doc.id; //first result of query [0]
     this.firestore.doc(`orders/${id}`).update({status: status});
    })
}
}
