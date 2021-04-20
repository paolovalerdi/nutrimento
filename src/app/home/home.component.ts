import { Component, OnInit } from '@angular/core';
import { RasturantService } from '../services/rasturant.service';
import { Router } from '@angular/router';
import { AddItemModelComponent } from '../single-rasturant/add-item-model/add-item-model.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly resturantService: RasturantService,
    private router: Router,
    public  dialog: MatDialog
  ) { }
  
  menu = this.resturantService.menu;

  ngOnInit() {
    this.menu.forEach((it) => console.log(it));
  }

  goToRestaurant(id){
    this.router.navigate(['restaurants/101']);
  }

  addItemDialog(meal): void {
    console
    const dialogRef = this.dialog.open(AddItemModelComponent, {
      width: '650px',
      data: meal
    });
    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.deliveryDate = result.deliveryDate;
      //   this.deliveryTime = result.deliveryTime;
      //   this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
      // } else {
      //   this.selectedDeliveryTime = this.deliveryTimeSelection[0];
      // }
    });
  }

}
