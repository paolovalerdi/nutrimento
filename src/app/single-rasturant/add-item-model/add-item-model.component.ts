import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Meal } from '../single-rasturant.component';
import { CartService } from 'src/app/services/cart.service';
import { Food } from 'src/app/interfaces/food';
import { OrderFood } from 'src/app/interfaces/order-food';

@Component({
  selector: 'app-add-item-model',
  templateUrl: './add-item-model.component.html',
  styleUrls: ['./add-item-model.component.scss']
})
export class AddItemModelComponent implements OnInit {

  itemCount = 1;
  specialInstructions: string

  constructor(
    public dialogRef: MatDialogRef<AddItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food,
    private cartService: CartService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.itemCount = this.itemCount + 1;
  }
  remove() {
    this.itemCount = this.itemCount - 1;
  }

  onKey(event) {
    this.specialInstructions = event.target.value;
  }

  ngOnInit() {
    // if (!this.data.deliveryDate) {
    //   this.data.deliveryDate = this.dates[0];
    //   this.data.deliveryTime = this.times[0];
    // }
  }

  addToCart() {
    this.cartService.addToCart(new OrderFood(this.specialInstructions, this.itemCount, this.data))
  }

}
