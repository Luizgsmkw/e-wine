import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

function login(control: AbstractControl): ValidationErrors | null {
  if(Validators.email(control) === null && Validators.required(control) === null){
    if(!control.value.includes("login@ewine.com")) {
      return {login: true};
    }
  }
  return null;
} 
function senha(control: AbstractControl): ValidationErrors | null {
  if(Validators.required(control) === null && Validators.required(control) === null){
    if(!control.value.includes(1234)) {
      return {senha: true};
    }
  }
  return null;
} 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements 
OnInit {
constructor(private fb: FormBuilder) { }

  loginForm= this.fb.group({
  login: ['', [Validators.required, Validators.email, login]], //começa vazio, e cria validador
  senha:['', [Validators.required, Validators.minLength(3), senha]]
});
//utiliza o get para que não seja necessário utilizar lá na frente, no ngIg um linha grande p pegar ficou só: *ngIf="nome?.touched && nome?.invalid"
  get login(){
    return this.loginForm.get('nome');
  }
  get senha(){
    return this.loginForm.get('senha');
  }
  onSubmit(){
    alert(`Seja bem-vindo! Cliente Logado`);
  }


  images = ['https://www.divvino.com.br/blog/wp-content/uploads/2020/08/playlist-para-tomar-vinho.jpg', 'https://www.fazfacil.com.br/wp-content/uploads/2012/11/20161227-vinhos-comidas.jpg' ];

  ngOnInit(): void {
  }


}

