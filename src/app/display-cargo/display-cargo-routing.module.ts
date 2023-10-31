import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayCargoPage } from './display-cargo.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayCargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayCargoPageRoutingModule {}
