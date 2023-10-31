import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NothingPageRoutingModule } from './nothing-routing.module';

import { NothingPage } from './nothing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NothingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NothingPage]
})
export class NothingPageModule {}
