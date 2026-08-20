import type { Metadata } from "next";
import Faq from "@/components/Faq";
import {
  BAIRROS_ENTREGA,
  INSTAGRAM,
  PAGAMENTOS,
  PRAZO_HORAS,
  SINAL_PERCENTUAL,
  WHATSAPP,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "WhatsApp, Instagram, bairros atendidos, formas de pagamento e dúvidas comuns sobre as encomendas.",
};

export default function Contato() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-10">
      <h1 className="font-titulo mb-6 text-3xl text-cacau">Contato</h1>

      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-titulo rounded-lg bg-tijolo px-5 py-4 text-center text-lg text-creme"
        >
          Falar no WhatsApp
        </a>

        <a
          href={`https://instagram.com/${INSTAGRAM}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-titulo rounded-lg border border-tijolo px-5 py-4 text-center text-lg text-tijolo"
        >
          {INSTAGRAM ? `@${INSTAGRAM}` : "Instagram"}
        </a>
      </div>

      <section className="mb-10">
        <h2 className="font-titulo mb-3 text-2xl text-cacau">Onde entrego</h2>

        {BAIRROS_ENTREGA.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {BAIRROS_ENTREGA.map((bairro) => (
              <li
                key={bairro}
                className="rounded-full bg-areia/30 px-3 py-1 text-sm"
              >
                {bairro}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm">
            Me chame no WhatsApp para confirmar se eu entrego no seu bairro.
          </p>
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-titulo mb-3 text-2xl text-cacau">
          Formas de pagamento
        </h2>

        <ul className="flex flex-wrap gap-2">
          {PAGAMENTOS.map((forma) => (
            <li
              key={forma}
              className="rounded-full bg-areia/30 px-3 py-1 text-sm"
            >
              {forma}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm">
          Cobro {SINAL_PERCENTUAL}% de sinal para confirmar o pedido e os outros{" "}
          {100 - SINAL_PERCENTUAL}% na entrega. As {PRAZO_HORAS}h de prazo contam a
          partir da confirmação do sinal.
        </p>
      </section>

      <section>
        <h2 className="font-titulo mb-3 text-2xl text-cacau">Dúvidas comuns</h2>
        <Faq />
      </section>
    </div>
  );
}
