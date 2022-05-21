import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  images = ['https://cdn.pixabay.com/photo/2015/04/25/03/09/cork-738603_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/06/27/14/37/wines-2447514_960_720.jpg'];


  email: string = ''; 
  senha: string = '';

  onSubmit(){
    alert(`Bem-vindo(a) ${this.email}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

