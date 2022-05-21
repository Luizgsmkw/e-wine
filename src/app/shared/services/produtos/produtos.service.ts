import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
private produtos: Produto[] = [
{
  imagem:'https://ingavinhos.agilecdn.com.br/40.png', 
  nomeDoProduto: 'Vinho Luigi Bosca Malbec',
  descricao: 'Um tinto puro, de grande corpo, estrutura, caráter e toda a suculência típica da variedade. Permanência longa e final de boca elegante.',
  uva: 'malbec',
  pais: 'Argentina',
  preco: 190.00,
  emPromocao: true,
  desconto: 0.2, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/3955.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Brado Branco - Adega de Borba',
  descricao: 'Vinho branco, de Portugal da região do Alentejo, premiado, de cor citrina com nuance esverdeada. Na boca apresenta sabor macio, equilibrado, com sensação persistente de frescura no final da prova. Aroma com boa intensidade aromática frutada e floral.',
  uva: 'Fernão Pires, Roupeiro, Tamarez',
  pais: 'Portugal',
  preco: 76.10,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/5320.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Brado Rosado - Adega de Borba',
  descricao: 'Vinho de cor salmão brilhante, com uma excelente frescura aromática, onde se destacam cativantes notas de frutos silvestres do Douro, em perfeita sintonia com elegantes notas florais.',
  uva: 'Trincadeira, Aragonez, Castelão',
  pais: 'Portugal',
  preco: 90.33,
  emPromocao: true,
  desconto: 0.1, //0...1  
  categoria: CategoriaProduto.ROSE,
},


{
  imagem:'https://ingavinhos.agilecdn.com.br/6177.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Espumante La Linda Brut',
  descricao: 'Coloração limão, brilhante, perlage fino. Paladar leve, com acidez viva que aporta frescor, conjunto seco, porém macio, e final equilibrado, agradável. Expressivo e refinado ao nariz, com frutas brancas frescas, maçã, pêra, notas florais e de mel.',
  uva: 'Chardonnay',
  pais: 'Argentina',
  preco: 220.00,
  emPromocao: true,
  desconto: 0.1, //0...1  
  categoria: CategoriaProduto.ESPUMANTE,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/1793.png?v=9-101213491', 
  nomeDoProduto: 'Vinho La Linda Torrontés',
  descricao: ' Cor verdeal brilhante. Exótico e extremamente perfumado com casca de laranja, jasmim, lichia e lavanda. Mediano de corpo, fresco e persistente.',
  uva: 'Torrontes',
  pais: 'Argentina',
  preco: 80.77,
  emPromocao: true,
  desconto: 0.2, //0...1  
  categoria: CategoriaProduto.BRANCO,
},
{
  imagem:'https://ingavinhos.agilecdn.com.br/33.png?v=9-101213491', 
  nomeDoProduto: 'Vinho La Linda Malbec',
  descricao: 'É um vinho límpido e brilhante, de coloração violeta intensa. Seus aromas são de frutas vermelhas maduras, especialmente ameixas, além de sutis notas florais.',
  uva: 'Malbec',
  pais: 'Argentina',
  preco: 80.56,
  emPromocao: true,
  desconto: 0.3, //0...1  
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