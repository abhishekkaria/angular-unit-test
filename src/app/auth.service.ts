import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }
  
  // Simulating a login operation
  login(username: string, password: string): boolean {
    // Add your authentication logic here
    // For simplicity, we'll just check for a username and password
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  // Simulating a logout operation
  logout(): void {
    this.isLoggedIn = false;
  }

  // Check if the user is logged in
  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
