import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastillaPageRoutingModule } from './pastilla-routing.module';

import { PastillaPage } from './pastilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastillaPageRoutingModule
  ],
  declarations: [PastillaPage]
})
export class PastillaPageModule {}
