import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  // Inyecciones
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  doLogin(): void {
    this.authService
      .login(this.loginForm.value)
      .then(() => this.router.navigate(['/admin']))
      .catch((error) => console.log(error));
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
