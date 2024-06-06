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
      text: 'Cancel', // The text displayed on the first button. When this button is clicked, the alert will be dismissed.
    },
    {
      text:'Reset Password', // The text displayed on the second button.
      handler : (data: any) => { // The handler function that will be called when the second button is clicked.
        console.log('Reset Password'); // Log 'Reset Password' for debugging purposes.
        this.resetPassword(data); // Call the resetPassword method and pass the data from the alert's input field.
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
      const user = userCredential.user; // Get the user information from the user credential.
      console.log(user); // Log the user information for debugging purposes.
      if(user.uid != undefined && user.uid != ""){
        console.log('Email is verified'); // Log that the email is verified for debugging purposes.
        this.navController.navigateRoot('/home'); // Navigate to the home page.
      }else{
        console.log('Email is not verified'); // Log that the email is not verified for debugging purposes.
        this.presentAlert('Email is not verified'); // Present an alert to the user that their email is not verified.
      }
    })
    .catch((error) => {
      const errorCode = error.code; // Get the error code from the error.
      const errorMessage = error.message; // Get the error message from the error.
      console.log(errorCode, errorMessage); // Log the error code and message for debugging purposes.
      this.presentAlert("Invalid Email or Password");
    });

  }

  resetPassword( data:any ){
    console.log(data); // Log the data for debugging purposes.
  
    // Send a password reset email to the email address specified in the data.
    sendPasswordResetEmail(this.auth, data.email)
    .then(() => {
      // Password reset email sent!
      console.log('Password reset email sent!'); // Log that the password reset email was sent for debugging purposes.
      this.presentAlert('Password reset email sent!'); // Present an alert to the user that the password reset email was sent.
    })
    .catch((error) => {
      // An error happened.
      const errorCode = error.code; // Get the error code from the error.
      const errorMessage = error.message; // Get the error message from the error.
      console.log(errorCode, errorMessage); // Log the error code and message for debugging purposes.
      this.presentAlert('Error sending password reset email'); // Present an alert to the user that there was an error sending the password reset email.
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
