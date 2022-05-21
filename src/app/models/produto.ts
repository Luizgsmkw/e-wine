export interface Produto {

    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    uva: string;
    pais: string;
    preco: number;
    emPromocao: boolean;
    desconto: number; //0...1  
    categoria: CategoriaProduto;
  
  }
  
  export enum CategoriaProduto {
   TINTO = 'tinto',
   BRANCO = 'branco',
   ROSE = 'rose',
   ESPUMANTE = 'espumante',
  }