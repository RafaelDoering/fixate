import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  solicitacaoForm = this.fb.group({
    patrimonio: ['', [Validators.required]],
    descricao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]]
  });

  onSubmit() {
    this.apiService.getItem(this.solicitacaoForm.value.patrimonio).subscribe((res) => {
      this.apiService.request(res._id, this.solicitacaoForm.value.descricao).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    });
  }

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }
}
