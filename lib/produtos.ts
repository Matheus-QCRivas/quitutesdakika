export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  rendimento: string;
  categoria: "quiche" | "doce";
  imagem: string;
  ativo: boolean;
};

// PREÇOS PROVISÓRIOS — substituir pelos valores reais antes de publicar
export const produtos: Produto[] = [
  {
    id: "quiche-frango-requeijao",
    nome: "Quiche de frango com requeijão cremoso",
    descricao: "", // preencher
    preco: 95,
    rendimento: "", // preencher
    categoria: "quiche",
    imagem: "/produtos/quiche-frango-requeijao.jpg",
    ativo: true,
  },
  {
    id: "quiche-carne-seca-banana",
    nome: "Quiche de carne seca com banana",
    descricao: "", // preencher
    preco: 108,
    rendimento: "", // preencher
    categoria: "quiche",
    imagem: "/produtos/quiche-carne-seca-banana.jpg",
    ativo: true,
  },
  {
    id: "quiche-carne-seca-requeijao",
    nome: "Quiche de carne seca com requeijão cremoso",
    descricao: "", // preencher
    preco: 108,
    rendimento: "", // preencher
    categoria: "quiche",
    imagem: "/produtos/quiche-carne-seca-requeijao.jpg",
    ativo: true,
  },
  {
    id: "bolo-de-tapioca",
    nome: "Bolo de tapioca de D Dea",
    descricao: "", // preencher
    preco: 92,
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/bolo-de-tapioca.jpg",
    ativo: true,
  },
  {
    id: "pudim-de-leite-condensado",
    nome: "Pudim de leite condensado",
    descricao: "", // preencher
    preco: 85,
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/pudim-de-leite-condensado.jpg",
    ativo: true,
  },
  {
    id: "pave-de-ovomaltine",
    nome: "Pavê de Ovomaltine",
    descricao: "", // preencher
    preco: 110,
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/pave-de-ovomaltine.jpg",
    ativo: true,
  },
];
