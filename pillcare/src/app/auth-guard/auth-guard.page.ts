import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.page.html',
  styleUrls: ['./auth-guard.page.scss'],
})
export class AuthGuardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   // This is the canActivate method that is used to determine if a route can be activated.
  // It returns an Observable, Promise or boolean that resolves to a boolean or a UrlTree.
  // A boolean value of true means the route can be activated, false means it cannot.
  // A UrlTree can be returned to redirect the user to a different route.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if there is a 'user' item in the local storage.
    if (localStorage.getItem('user')) {
      // If there is, return true to allow the navigation.
      return true;
    } else {
      // If there isn't, return a UrlTree that redirects the user to the '/login' page and prevent the navigation.
      return this.router.parseUrl('/login');
    }
  }

}
