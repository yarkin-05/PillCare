import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Initialize Firebase
  App = initializeApp(environment.firebaseConfig);
  email = '';
  password = '';

  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(this.App);

  constructor(private alertController: AlertController, private navController: NavController) { }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text:'Reset Password',
      handler : (data: any) => {
        console.log('Reset Password');
        this.resetPassword(data);
      }

    }
  ];
  public alertInputs = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email'
    }
  ]

  ngOnInit() {
  }

  login(){
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      if(user.uid != undefined && user.uid != "" && user.emailVerified){
        console.log('Email is verified');
        this.navController.navigateRoot('home');
      }else{
        console.log('Email is not verified');
        this.presentAlert('Email is not verified');
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      this.presentAlert("Invalid Email or Password");
    });

  }

  resetPassword( data:any ){

    console.log(data);

    sendPasswordResetEmail(this.auth, data.email)
    .then(() => {
      // Password reset email sent!
      console.log('Password reset email sent!');
      this.presentAlert('Password reset email sent!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      this.presentAlert('Error sending password reset email: ' + error.message);

      // ..
    });
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

  }

}
