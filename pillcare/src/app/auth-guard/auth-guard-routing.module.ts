import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardPage } from './auth-guard.page';

const routes: Routes = [
  {
    path: '',
    component: AuthGuardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthGuardPageRoutingModule {}
