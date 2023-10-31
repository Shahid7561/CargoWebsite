import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyuserPage } from './myuser.page';

const routes: Routes = [
  {
    path: '',
    component: MyuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyuserPageRoutingModule {}
