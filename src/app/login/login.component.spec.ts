import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login', 'logout']);

    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: AuthService, useValue: authSpy }],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLoggedIn to true when login is successful', () => {
    // Arrange
    authService.login.and.returnValue(true);

    // Act
    component.login();

    // Assert
    expect(component.isLoggedIn).toBe(true);
    expect(authService.login).toHaveBeenCalledWith(component.username, component.password);
  });

  it('should set isLoggedIn to false when logout is called', () => {
    // Act
    component.logout();

    // Assert
    expect(component.isLoggedIn).toBe(false);
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should set isLoggedIn to false when login is unsuccessful', () => {
    // Arrange
    authService.login.and.returnValue(false);

    // Act
    component.login();

    // Assert
    expect(component.isLoggedIn).toBe(false);
    expect(authService.login).toHaveBeenCalledWith(component.username, component.password);
  });
});
