import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { FavouritesComponent } from './account/favourites/favourites.component';
import { OrdersComponent } from './account/orders/orders.component';
import { PaymentsComponent } from './account/payments/payments.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { SingleRasturantComponent } from './single-rasturant/single-rasturant.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './kitchen/order/order.component';
import { WorkersHomeComponent } from './workers-home/workers-home.component';
import { WorkersLoginComponent } from './workers-login/workers-login.component';
import { WorkersSingupComponent } from './workers-singup/workers-singup.component';




const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'restaurants/:id', component: SingleRasturantComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'kitchen',
    children: [
      {
        path: 'orders', component: OrderComponent
      },
    ]
  },
  {
    path: 'my-account', component: MyAccountComponent,
    children: [
      {
        path: 'favourites', component: FavouritesComponent
      },
      {
        path: 'orders', component: OrdersComponent
      },
      {
        path: 'payments', component: PaymentsComponent
      },
      {
        path: 'addresses', component: AddressesComponent
      },
      {
        path: '', redirectTo: 'orders', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'orders', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'workershome', component: WorkersHomeComponent
  },
  {
    path: 'workerslogin', component: WorkersLoginComponent
  },
  {
    path: 'workerssingup', component: WorkersSingupComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
