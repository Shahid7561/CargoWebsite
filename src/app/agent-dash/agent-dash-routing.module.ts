import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentDashPage } from './agent-dash.page';

const routes: Routes = [
  {
    path: '',
    component: AgentDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentDashPageRoutingModule {}
