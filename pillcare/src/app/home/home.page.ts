import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = "ibuprofeno";
  dosis = 300;
  dia = 11;
  mes = "mayo"

  constructor(private router: Router) {}


  navigateToPastilla(){
    this.router.navigateByUrl('/pastilla')
  }

  onCloc(){
    console.log('cli')
  }

  signOut(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/first');
  }
}
