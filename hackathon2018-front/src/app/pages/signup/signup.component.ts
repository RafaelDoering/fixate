import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  error: string;

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(254)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
  });

  onSubmit() {
    this.authService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (res) => {
      const error = res.error.errors[0];
      if (error === 'Email já utilizado.') {
        this.signupForm.patchValue({
          email: ''
        });
        this.error = error;
      } else {
        this.error = 'Erro desconhecido.';
      }
    });
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
}
