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
  senha: ['', [Validators.required]], //começa vazio, e cria validador
  email: ['', [Validators.required, Validators.email]],
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
