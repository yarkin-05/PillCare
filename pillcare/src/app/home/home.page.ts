import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

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
  constructor(private router: Router, private calendar: Calendar) {}

  ngOnInit(){
    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);

    let endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    this.calendar.findEvent('', '', '', startDate, endDate).then((data) => {
      console.log(data);
      if(data.length > 0){
        this.pillName = data[0].title;
      }
    
    }).catch((error) => {
      console.error(error);
    });
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
