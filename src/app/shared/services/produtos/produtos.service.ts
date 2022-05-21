import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
private produtos: Produto[] = [
{
  imagem:'https://ingavinhos.agilecdn.com.br/40.png', 
  nomeDoProduto: 'Luigi Bosca',
  descricao: 'Um tinto puro, de grande corpo, estrutura, caráter e toda a suculência típica da variedade. Permanência longa e final de boca elegante.',
  uva: 'malbec',
  pais: 'Argentina',
  preco: 190.00,
  emPromocao: true,
  desconto: 0.2, //0...1  
  categoria: CategoriaProduto.TINTO,
},
];

getProdutos(): Produto[]{
  return this.produtos;
}

addProduto(produto: Produto) {
  this.produtos.push(produto);
}
  constructor() { }
}