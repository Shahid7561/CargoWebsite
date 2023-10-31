import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAgentPageRoutingModule } from './add-agent-routing.module';

import { AddAgentPage } from './add-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAgentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddAgentPage]
})
export class AddAgentPageModule {}
