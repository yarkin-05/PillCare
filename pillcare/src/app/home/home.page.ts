import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

//import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   // Create a new Date object
   date = new Date();

   // Get the current day and month
   dia = this.date.getDate();
   mes = this.date.toLocaleString('default', { month: 'long' });
 
    // Get the current pill
   pillName: string = "";
  constructor(private router: Router) {}

  ngOnInit(){
   
  }
  
  async sendInquiry(){
    await Browser.open({ url: 'https://www.pillcare.com' });
  }

  async openWebPage() {
    await Browser.open({ url: 'https://www.imss.gob.mx/salud-en-linea/planificacion-familiar/pastillas-anticonceptivas' });
  }

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
