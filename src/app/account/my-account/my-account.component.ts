import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  currentRoute = "orders";
  constructor(private activetedRoute: ActivatedRoute) { 

  }
  changeChildRoute(name){
    this.currentRoute = name;
  }
  ngOnInit() {
  }

}
