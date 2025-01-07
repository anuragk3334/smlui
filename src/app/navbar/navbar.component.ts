import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logout(): void {
    // Clear the authentication flag or any other stored user data
    localStorage.removeItem('isAuthenticated');

    // Redirect to the standalone login.html
    window.location.href = '/assets/login.html';
  }
}
