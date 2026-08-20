"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WHATSAPP } from "@/lib/config";
import { produtos, type Produto } from "@/lib/produtos";

const GRUPOS: { categoria: Produto["categoria"]; titulo: string }[] = [
  { categoria: "quiche", titulo: "Quiches" },
  { categoria: "doce", titulo: "Doces" },
];

/** Formatação fixa em pt-BR para o markup bater no servidor e no cliente. */
function emReais(valor: number) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

type Carrinho = Record<string, number>;

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState<Carrinho>({});
  const [semFoto, setSemFoto] = useState<Record<string, true>>({});

  const ativos = useMemo(() => produtos.filter((p) => p.ativo), []);

  const selecionados = ativos
    .map((produto) => ({ produto, quantidade: carrinho[produto.id] ?? 0 }))
    .filter(({ quantidade }) => quantidade > 0);

  const total = selecionados.reduce(
    (soma, { produto, quantidade }) => soma + produto.preco * quantidade,
    0,
  );

  const vazio = selecionados.length === 0;

  function ajustar(id: string, delta: number) {
    setCarrinho((atual) => {
      const quantidade = Math.max(0, (atual[id] ?? 0) + delta);

      if (quantidade === 0) {
        const resto = { ...atual };
        delete resto[id];
        return resto;
      }

      return { ...atual, [id]: quantidade };
    });
  }

  function enviarPedido() {
    const linhas = selecionados.map(
      ({ produto, quantidade }) =>
        `- ${quantidade}x ${produto.nome} (${emReais(produto.preco * quantidade)})`,
    );

    const mensagem = [
      "Olá! Gostaria de fazer um pedido:",
      "",
      ...linhas,
      "",
      `Total: ${emReais(total)}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-8">
      {GRUPOS.map(({ categoria, titulo }) => {
        const itens = ativos.filter((p) => p.categoria === categoria);

        if (itens.length === 0) return null;

        return (
          <section key={categoria} className="mb-8">
            <h2 className="font-titulo mb-3 text-2xl text-cacau">{titulo}</h2>

            <ul>
              {itens.map((produto) => {
                const quantidade = carrinho[produto.id] ?? 0;

                return (
                  <li
                    key={produto.id}
                    className="flex items-center gap-4 border-b border-areia/40 py-3"
                  >
                    {semFoto[produto.id] ? (
                      <div
                        aria-hidden="true"
                        className="h-14 w-14 shrink-0 rounded bg-areia/30"
                      />
                    ) : (
                      <Image
                        src={produto.imagem}
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-14 shrink-0 rounded object-cover"
                        onError={() =>
                          setSemFoto((atual) => ({ ...atual, [produto.id]: true }))
                        }
                      />
                    )}

                    <div className="min-w-0 flex-1">
                      <p className="font-titulo text-lg text-cacau">{produto.nome}</p>
                      <p className="text-sm">
                        {produto.rendimento && <span>{produto.rendimento} &middot; </span>}
                        {emReais(produto.preco)}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={() => ajustar(produto.id, -1)}
                        disabled={quantidade === 0}
                        aria-label={`Remover uma unidade de ${produto.nome}`}
                        className="h-8 w-8 rounded-full border border-areia text-tijolo disabled:opacity-30"
                      >
                        &minus;
                      </button>

                      <span
                        aria-live="polite"
                        aria-label={`${quantidade} de ${produto.nome}`}
                        className="w-6 text-center tabular-nums"
                      >
                        {quantidade}
                      </span>

                      <button
                        type="button"
                        onClick={() => ajustar(produto.id, 1)}
                        aria-label={`Adicionar uma unidade de ${produto.nome}`}
                        className="h-8 w-8 rounded-full border border-areia text-tijolo"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <div className="sticky bottom-0 border-t border-areia bg-creme py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-titulo text-lg text-cacau">
            Total: <span className="tabular-nums">{emReais(total)}</span>
          </p>

          <button
            type="button"
            onClick={enviarPedido}
            disabled={vazio}
            aria-describedby={vazio ? "aviso-carrinho" : undefined}
            className="rounded-full bg-tijolo px-5 py-2 text-creme disabled:opacity-40"
          >
            Enviar pedido
          </button>
        </div>

        {vazio && (
          <p id="aviso-carrinho" className="mt-2 text-right text-sm">
            Escolha ao menos um item para enviar o pedido.
          </p>
        )}
      </div>
    </div>
  );
}
