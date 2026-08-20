import Link from "next/link";
import { PRAZO_HORAS } from "@/lib/config";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-10 text-center">
      <h1 className="font-titulo text-3xl text-cacau sm:text-4xl">
        Quitutes feitos à mão, sob encomenda
      </h1>

      <p className="mt-3">
        Salvador &middot; {PRAZO_HORAS}h a partir da confirmação do sinal
      </p>

      <Link
        href="/cardapio"
        className="mt-6 inline-block rounded-full bg-tijolo px-5 py-2 text-creme"
      >
        Ver o cardápio
      </Link>
    </section>
  );
}
