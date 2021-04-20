import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Food } from '../interfaces/food';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RasturantService {

  menu: Observable<Food[]>
  private foodMenuCollection: AngularFirestoreCollection<Food>

  constructor(private readonly firestore: AngularFirestore) {
    this.foodMenuCollection = firestore.collection("menu");
    this.menu = this.foodMenuCollection.snapshotChanges().pipe(
      map(actions => actions.map(it => {
        const docData = it.payload.doc.data();
        return new Food(
          it.payload.doc.id,
          docData.name,
          docData.description, 
          docData.price,
          docData.imageUrl
        );
      })
    ));
  }
  getRestaurants(): Observable<any>{
   return  new Observable(subscriber => {
    subscriber.next({
      id: 1,
      name: "YoutFavorivets"
    });
  });
  }
  getRecommendsItems(): Observable<any> {
    return new Observable();
  }
}
