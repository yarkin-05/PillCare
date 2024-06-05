import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthGuardPageRoutingModule } from './auth-guard-routing.module';

import { AuthGuardPage } from './auth-guard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthGuardPageRoutingModule
  ],
  declarations: [AuthGuardPage]
})
export class AuthGuardPageModule {}
