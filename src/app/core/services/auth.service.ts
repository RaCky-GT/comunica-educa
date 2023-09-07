import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { LoginForm } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inyecciones
  private auth = inject(Auth);

  login(loginForm: LoginForm): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, loginForm.email, loginForm.password);
  }

  logout() {
    return signOut(this.auth);
  }

}
