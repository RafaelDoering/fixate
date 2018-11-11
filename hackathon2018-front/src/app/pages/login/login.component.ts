import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(254)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
  });

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (res) => {
      const error = res.error.errors[0];
      if (error === 'Email não existente.') {
        this.loginForm.patchValue({
          email: ''
        });
        this.error = error;
      } else if (error === 'Senha incorreta.') {
        this.loginForm.patchValue({
          password: ''
        });
        this.error = error;
      } else {
        this.error = 'Erro desconhecido.';
      }
    });
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
}