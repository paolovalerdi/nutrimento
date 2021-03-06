import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatBadgeModule,
} from '@angular/material';
import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';
import { ReactiveFormsModule } from '@angular/forms';
import { MdePopoverModule } from '@material-extended/mde';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { SingleRasturantComponent } from './single-rasturant/single-rasturant.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {FormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SheduledDeliverModelComponent } from './shared/sheduled-deliver-model/sheduled-deliver-model.component';
import { FavouritesComponent } from './account/favourites/favourites.component';
import { OrdersComponent } from './account/orders/orders.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { PaymentsComponent } from './account/payments/payments.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AddItemModelComponent } from './single-rasturant/add-item-model/add-item-model.component';
import { DelayInterceptor } from './services/delay-interceptor.service';

const skltnConfig: SkltnConfig = {
  rectRadius: 10,
  flareWidth: '150px',
  bgFill: '#d8d5d1',
  flareFill: 'rgba(255,255,255, 0.5)',  
};

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './kitchen/order/order.component';
import { WorkersHomeComponent } from './workers-home/workers-home.component';
import { WorkersLoginComponent } from './workers-login/workers-login.component';
import { WorkersSingupComponent } from './workers-singup/workers-singup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SingleRasturantComponent,
    CheckoutComponent,
    SheduledDeliverModelComponent,
    FavouritesComponent,
    OrdersComponent,
    MyAccountComponent,
    PaymentsComponent,
    AddressesComponent,
    AddItemModelComponent,
    PaymentComponent,
    OrderComponent,
    WorkersHomeComponent,
    WorkersLoginComponent,
    WorkersSingupComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //material
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatBadgeModule,
    //-----end material
    MdePopoverModule,
    NgxSkltnModule.forRoot(skltnConfig),
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({duration: 1500}),
    NgxPageScrollModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true },
    AngularFirestore
    

  ],
  bootstrap: [AppComponent],
  entryComponents: [SheduledDeliverModelComponent, AddItemModelComponent, PaymentComponent]

})
export class AppModule { }
