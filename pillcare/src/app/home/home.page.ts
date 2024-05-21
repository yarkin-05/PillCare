import { Component } from '@angular/core';

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

  constructor() {}

}