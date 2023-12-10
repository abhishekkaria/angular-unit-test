import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should return true and set isLoggedIn to true for a valid login', () => {
    // Act
    const result = authService.login('user', 'password');

    // Assert
    expect(result).toBe(true);
    expect(authService.isLoggedInUser()).toBe(true);
  });

  it('should return false and set isLoggedIn to false for an invalid login', () => {
    // Act
    const result = authService.login('invalidUser', 'invalidPassword');

    // Assert
    expect(result).toBe(false);
    expect(authService.isLoggedInUser()).toBe(false);
  });

  it('should set isLoggedIn to false on logout', () => {
    // Arrange
    authService.login('user', 'password'); // Log in first

    // Act
    authService.logout();

    // Assert
    expect(authService.isLoggedInUser()).toBe(false);
  });

  it('should return false for isLoggedInUser when not logged in', () => {
    // Assert
    expect(authService.isLoggedInUser()).toBe(false);
  });
});