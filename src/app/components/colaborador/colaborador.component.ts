import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  loginForm= this.fb.group({
  nome: ['', [Validators.required, Validators.minLength(5)]], //começa vazio, e cria validador
  email: ['', [Validators.required, Validators.email]],
});
//utiliza o get para que não seja necessário utilizar lá na frente, no ngIg um linha grande p pegar ficou só: *ngIf="nome?.touched && nome?.invalid"
  get nome(){
    return this.loginForm.get('nome');
  }
  get email(){
    return this.loginForm.get('email');
  }
  onSubmit(){
    alert(`Seja bem-vindo! Colaborador Logado`);
  }

 

  ngOnInit(): void {
  }
}
