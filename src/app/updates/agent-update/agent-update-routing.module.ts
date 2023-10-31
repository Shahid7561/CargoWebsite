import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentUpdatePage } from './agent-update.page';

const routes: Routes = [
  {
    path: '',
    component: AgentUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentUpdatePageRoutingModule {}
