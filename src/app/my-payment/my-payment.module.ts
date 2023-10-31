import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPaymentPageRoutingModule } from './my-payment-routing.module';

import { MyPaymentPage } from './my-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPaymentPageRoutingModule
  ],
  declarations: [MyPaymentPage]
})
export class MyPaymentPageModule {}
