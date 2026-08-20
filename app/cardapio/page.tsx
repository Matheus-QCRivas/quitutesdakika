import type { Metadata } from "next";
import Cardapio from "@/components/Cardapio";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Quiches e doces artesanais feitos sob encomenda em Salvador. Monte seu pedido e feche pelo WhatsApp.",
};

export default function CardapioPage() {
  return (
    <>
      <h1 className="font-titulo mx-auto w-full max-w-2xl px-6 pt-10 text-3xl text-cacau">
        Cardápio
      </h1>

      <Cardapio />
    </>
  );
}
