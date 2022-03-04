import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar // private router: Router
  ) {}

  ngOnInit(): void {
    this.montarFormulario();
  }

  montarFormulario() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logarSistema() {
    if (this.formulario.invalid) {
      this.snackBar.open('Dados inválidos', 'Erro', { duration: 3000 });
      return;
    }
    alert(JSON.stringify(this.formulario.value));
  }
}
