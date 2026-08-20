import Image from "next/image";
import Cardapio from "@/components/Cardapio";
import { PRAZO_HORAS } from "@/lib/config";

/** PNG 4x2 em tom areia, usado como blur enquanto a capa carrega. */
const CAPA_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAEElEQVR4nGO4cWwdHDEgcwDwShJhKzspZgAAAABJRU5ErkJggg==";

export default function Home() {
  return (
    <>
      <Image
        src="/capa.jpg"
        alt=""
        width={1600}
        height={700}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={CAPA_BLUR}
        priority
        className="h-auto w-full object-cover"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-10 text-center">
        <h1 className="font-titulo text-3xl text-cacau sm:text-4xl">
          Quitutes feitos à mão, sob encomenda
        </h1>

        <p className="mt-3">
          Salvador &middot; {PRAZO_HORAS}h a partir da confirmação do sinal
        </p>

        <a
          href="#cardapio"
          className="mt-6 inline-block rounded-full bg-tijolo px-5 py-2 text-creme"
        >
          Ver o cardápio
        </a>
      </section>

      <section id="cardapio" className="scroll-mt-4">
        <Cardapio />
      </section>
    </>
  );
}
