import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('isAuthenticated'); // Check if the user is logged in
    if (!isAuthenticated) {
      window.location.href = '/assets/login.html'; // Redirect to login.html if not authenticated
      return false;
    }
    return true;
  }
}
