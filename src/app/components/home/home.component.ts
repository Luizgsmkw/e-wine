import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent  {
 
  images = ['https://media.istockphoto.com/photos/pouring-red-wine-into-the-glass-picture-id1314034344?b=1&k=20&m=1314034344&s=170667a&w=0&h=c5tU_kLbkchHqOQtDOqKqUVCNvNkvLZuEhKrXsdVt2c=', 'https://startupi.com.br/wp-content/uploads/2020/09/wine-ipo-1.jpg', 'https://i.pinimg.com/736x/48/a1/c3/48a1c3c3a2c198a7773500c5583ffc9f.jpg'];
  

  constructor() {
    // customize default values of carousels used by this component tree
    
  }

}