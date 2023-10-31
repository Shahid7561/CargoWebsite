import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayAgentPageRoutingModule } from './display-agent-routing.module';

import { DisplayAgentPage } from './display-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayAgentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DisplayAgentPage]
})
export class DisplayAgentPageModule {}
