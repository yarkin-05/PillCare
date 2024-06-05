import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardPage } from '../auth-guard/auth-guard.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
