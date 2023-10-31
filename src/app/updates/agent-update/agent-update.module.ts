import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentUpdatePageRoutingModule } from './agent-update-routing.module';

import { AgentUpdatePage } from './agent-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgentUpdatePage]
})
export class AgentUpdatePageModule {}
