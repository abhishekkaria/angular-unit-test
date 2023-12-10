import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HighlightDirective } from '../highlight.directive';
import { UppercasePipe } from '../uppercase.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HighlightDirective,UppercasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  componentName = 'Login'

  constructor(private authService: AuthService) {}

  // onSubmit() {
  //   // Add your authentication logic here
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  //   // Redirect or perform other actions after successful login

  //   this.isLoggedIn = this.authService.login(this.username, this.password);
  // }

  login(): void {
    this.isLoggedIn = this.authService.login(this.username, this.password);
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
