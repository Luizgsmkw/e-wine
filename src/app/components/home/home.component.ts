import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent  {

  images = ['https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/istockphoto-1314034344-170667a.jpg', 'https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/thumb-1920-443997.jpg', 'https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/48a1c3c3a2c198a7773500c5583ffc9f.jpg'];


  constructor() {
    // customize default values of carousels used by this component tree

  }

}
