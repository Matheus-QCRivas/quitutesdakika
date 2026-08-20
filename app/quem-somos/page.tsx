import Image from "next/image";
import { depoimentos } from "@/lib/depoimentos";

export default function QuemSomos() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-10">
      {/* Provisória: trocar por uma foto da Kika quando ela mandar. */}
      <Image
        src="/avatar-512.png"
        alt="Kika"
        width={160}
        height={160}
        className="mb-6 h-40 w-40 rounded-full object-cover"
      />

      <h1 className="font-titulo mb-4 text-3xl text-cacau">Quem faz</h1>

      {/* Rascunho — texto para a Kika reescrever com as palavras dela. */}
      <div className="space-y-4">
        <p>
          Meu nome é Kika e sou eu quem faz cada quitute que sai daqui. Trabalho
          sob encomenda, em Salvador, e é sempre assim: você me chama, a gente
          combina o que você quer, e eu faço na hora certa para chegar fresquinho
          na sua mão.
        </p>

        <p>
          Faço tudo à mão, em quantidade pequena, porque é o jeito que eu gosto
          de trabalhar — dá para cuidar do ponto de cada massa e de cada recheio.
          É por isso também que peço um tempinho de antecedência: prefiro fazer
          bem feito a fazer correndo.
        </p>

        <p className="font-assinatura text-2xl text-tijolo">Kika</p>
      </div>

      {depoimentos.length > 0 && (
        <section className="mt-10">
          <h2 className="font-titulo mb-4 text-2xl text-cacau">
            O que dizem por aí
          </h2>

          <ul className="space-y-4">
            {depoimentos.map(({ id, texto, autor, bairro }) => (
              <li key={id} className="border-l-2 border-rose pl-4">
                <p className="text-sm">{texto}</p>
                <p className="mt-1 text-sm text-cacau">
                  {autor} &middot; {bairro}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
