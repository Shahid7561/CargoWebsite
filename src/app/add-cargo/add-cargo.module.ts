import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCargoPageRoutingModule } from './add-cargo-routing.module';

import { AddCargoPage } from './add-cargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCargoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddCargoPage]
})
export class AddCargoPageModule {}
