import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //add Auth to the constructor
  constructor(private auth: Auth) { }

  //add the signIn method
  async loginUser(email: string, password: string) {
    try {
      return signInWithEmailAndPassword(this.auth, email, password);
    } catch (e){
      console.error(e);
      return null;
    }
  }

  //add the signUp method
  async signUp(email: string, password: string) {
    try{
      return createUserWithEmailAndPassword(this.auth, email, password);
    } catch (e){
      console.error(e);
      return null;
    }
  }

 

  //add the resetPassword method 
  async resetPassword(email: string) {
    try{
      return sendPasswordResetEmail(this.auth, email);
    } catch (e){
      console.error(e);
      return null;
    }
  }

  //add the signOut method
  signOut() {
    try{
      return signOut(this.auth);
    } catch (e){
      console.error(e);
      return null;
    }
  }

  
}
