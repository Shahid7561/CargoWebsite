import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyuserPageRoutingModule } from './myuser-routing.module';

import { MyuserPage } from './myuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyuserPageRoutingModule
  ],
  declarations: [MyuserPage]
})
export class MyuserPageModule {}
