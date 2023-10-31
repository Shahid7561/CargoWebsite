import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPaymentPage } from './my-payment.page';

const routes: Routes = [
  {
    path: '',
    component: MyPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPaymentPageRoutingModule {}
