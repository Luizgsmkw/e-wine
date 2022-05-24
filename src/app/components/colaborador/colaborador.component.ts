import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';


function colaborador(control: AbstractControl): ValidationErrors | null {
  if(Validators.email(control) === null && Validators.required(control) === null){
    if(!control.value.includes("colaborador@ewine.com")) {
      return {colaborador: true};
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
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  loginForm= this.fb.group({
  senha: ['', [Validators.required, senha]], //começa vazio, e cria validador
  email: ['', [Validators.required, Validators.email, colaborador]],
});
//utiliza o get para que não seja necessário utilizar lá na frente, no ngIg um linha grande p pegar ficou só: *ngIf="nome?.touched && nome?.invalid"
  get senha(){
    return this.loginForm.get('senha');
  }
  get email(){
    return this.loginForm.get('email');
  }
  onSubmit(){
    alert(`Seja bem-vindo! Colaborador Logado`);
    (<HTMLInputElement> document.getElementById("m-1")).setAttribute("hidden", "true");
    (<HTMLInputElement> document.getElementById("btn-sm")).removeAttribute("hidden");
  }
  

 

  ngOnInit(): void {
  }
}
