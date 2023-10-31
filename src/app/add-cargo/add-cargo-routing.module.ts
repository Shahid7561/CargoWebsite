import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCargoPage } from './add-cargo.page';

const routes: Routes = [
  {
    path: '',
    component: AddCargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCargoPageRoutingModule {}
