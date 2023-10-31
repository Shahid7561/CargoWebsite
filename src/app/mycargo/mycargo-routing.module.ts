import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycargoPage } from './mycargo.page';

const routes: Routes = [
  {
    path: '',
    component: MycargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycargoPageRoutingModule {}
