import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargoUpdatePageRoutingModule } from './cargo-update-routing.module';

import { CargoUpdatePage } from './cargo-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargoUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CargoUpdatePage]
})
export class CargoUpdatePageModule {}
