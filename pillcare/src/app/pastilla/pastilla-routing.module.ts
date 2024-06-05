import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastillaPage } from './pastilla.page';

const routes: Routes = [
  {
    path: '',
    component: PastillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastillaPageRoutingModule {}
