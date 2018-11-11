import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item;
  unidade;

  avancarEtapaForm = this.fb.group({
    descricao: ['', [Validators.required]],
    status: ['', [Validators.required]]
  });

  onSubmit() {
    this.apiService.patchItem(this.item._id, this.avancarEtapaForm.value.status, this.avancarEtapaForm.value.descricao).subscribe((res) => {
        this.router.navigateByUrl('/');
      });
  }

  ngOnInit() {
    this.apiService.getItem(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.item = res;
        this.avancarEtapaForm.patchValue({
          descricao: this.item.descricao
        });
        if (this.item.status === 'Quebrado' || this.item.status === 'Aguardando Avalidação') {
          this.avancarEtapaForm.patchValue({
            status: 'Em manutenção'
          });
        } else if (this.item.status === 'Em manutenção') {
          this.avancarEtapaForm.patchValue({
            status: 'Em ordem'
          });
        } else if (this.item.status === 'Em ordem') {
          this.avancarEtapaForm.patchValue({
            status: 'Quebrado'
          });
        }

        this.apiService.getUnidade(res.unidade).subscribe((res2) => {
          this.unidade = res2;
        });
      }, () => {
        this.router.navigateByUrl('/');
      });
  }

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }
}
