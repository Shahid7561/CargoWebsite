import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentDashPageRoutingModule } from './agent-dash-routing.module';

import { AgentDashPage } from './agent-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentDashPageRoutingModule
  ],
  declarations: [AgentDashPage]
})
export class AgentDashPageModule {}
