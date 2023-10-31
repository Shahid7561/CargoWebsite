import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NothingPage } from './nothing.page';

const routes: Routes = [
  {
    path: '',
    component: NothingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NothingPageRoutingModule {}
