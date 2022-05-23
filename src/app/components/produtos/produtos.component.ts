import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


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
