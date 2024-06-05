import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
  }

}
