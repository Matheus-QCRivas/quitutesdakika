"use client";

import { useState } from "react";
import { CANCELAMENTO_HORAS, PRAZO_HORAS, SINAL_PERCENTUAL } from "@/lib/config";

const PERGUNTAS = [
  {
    id: "prazo",
    pergunta: "Com quanta antecedência preciso pedir?",
    resposta: `Preciso de no mínimo ${PRAZO_HORAS}h, contadas a partir da confirmação do sinal — é aí que eu entro na produção, não na hora em que a gente começa a conversar. Em datas comemorativas a agenda fecha antes, então me chame com folga.`,
  },
  {
    id: "pagamento",
    pergunta: "Como faço o pagamento?",
    resposta: `Aceito Pix ou dinheiro. Para confirmar o pedido cobro um sinal de ${SINAL_PERCENTUAL}%, e o restante você paga na entrega ou na retirada. Começo a produção depois que o sinal é confirmado.`,
  },
  {
    id: "cancelamento",
    pergunta: "E se eu precisar cancelar ou remarcar?",
    resposta: `Você pode cancelar até ${CANCELAMENTO_HORAS}h depois de confirmar o pedido e eu devolvo o sinal integralmente. Passado esse prazo o sinal não é devolvido, porque os ingredientes já foram comprados.`,
  },
  {
    id: "entrega",
    pergunta: "Vocês entregam?",
    resposta:
      "Entrego nos bairros listados na página de contato. A taxa varia conforme o bairro e a gente combina pelo WhatsApp. Também dá para retirar comigo.",
  },
  {
    id: "encomenda-grande",
    pergunta: "Faço encomenda para festa?",
    resposta:
      "Faço sim. Para quantidades maiores me chame com mais antecedência, assim eu consigo reservar o dia e conversar com você sobre sabores e tamanhos.",
  },
];

export default function Faq() {
  const [aberta, setAberta] = useState<string | null>(null);

  return (
    <ul className="border-t border-areia/40">
      {PERGUNTAS.map(({ id, pergunta, resposta }) => {
        const aberto = aberta === id;

        return (
          <li key={id} className="border-b border-areia/40">
            <h3>
              <button
                type="button"
                onClick={() => setAberta(aberto ? null : id)}
                aria-expanded={aberto}
                aria-controls={`resposta-${id}`}
                className="font-titulo flex w-full items-center justify-between gap-4 py-3 text-left text-lg text-cacau"
              >
                {pergunta}
                <span aria-hidden="true" className="shrink-0 text-tijolo">
                  {aberto ? "\u2212" : "+"}
                </span>
              </button>
            </h3>

            {aberto && (
              <p id={`resposta-${id}`} className="pb-4 text-sm">
                {resposta}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
