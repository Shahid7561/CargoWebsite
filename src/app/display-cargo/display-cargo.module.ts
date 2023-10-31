import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayCargoPageRoutingModule } from './display-cargo-routing.module';

import { DisplayCargoPage } from './display-cargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayCargoPageRoutingModule
  ],
  declarations: [DisplayCargoPage]
})
export class DisplayCargoPageModule {}
