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

export const produtos: Produto[] = [
  {
    id: "quiche",
    nome: "Quiche",
    descricao: "", // preencher
    preco: 0, // preencher
    rendimento: "", // preencher
    categoria: "quiche",
    imagem: "/produtos/quiche.jpg",
    ativo: true,
  },
  {
    id: "pudim",
    nome: "Pudim",
    descricao: "", // preencher
    preco: 0, // preencher
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/pudim.jpg",
    ativo: true,
  },
  {
    id: "pave",
    nome: "Pavê",
    descricao: "", // preencher
    preco: 0, // preencher
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/pave.jpg",
    ativo: true,
  },
  {
    id: "torta-de-tapioca",
    nome: "Torta de tapioca",
    descricao: "", // preencher
    preco: 0, // preencher
    rendimento: "", // preencher
    categoria: "doce",
    imagem: "/produtos/torta-de-tapioca.jpg",
    ativo: true,
  },
];
