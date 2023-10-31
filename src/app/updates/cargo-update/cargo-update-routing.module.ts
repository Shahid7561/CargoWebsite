import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargoUpdatePage } from './cargo-update.page';

const routes: Routes = [
  {
    path: '',
    component: CargoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargoUpdatePageRoutingModule {}
