import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  images = ['https://static.paodeacucar.com/static/pa/1639430071775-mob-2021-01-16-exclusivos-mobile-2.jpg?im=Resize,width=599', 'https://startupi.com.br/wp-content/uploads/2020/09/wine-ipo-1.jpg', 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2022/03/24/10vinhos-sopq4yoe5h0m.299_1190x330_03_15'];

  constructor(private produtosService: ProdutosService) { }
  produtos: Produto[] = [];
  carrinho: Produto[] = [];

 
  addCarrinho(produto:Produto){
    this.carrinho.push(produto);
    console.log("Produto adicionado");
    console.log(this.carrinho);
  }
  
  produtoNoCarrinho(produto:Produto):boolean {
    return this.carrinho.includes(produto);
  }

  ngOnInit(): void {
    //dentro do hook on-init vc deve colocar
    //os acessos aos dados iniciais
    this.produtos = this.produtosService.getProdutos();

  }

}
